const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const htmlPdf = require('html-pdf');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static('public')); // onde está o frontend

app.post('/gerar-pdf', (req, res) => {
  const { html } = req.body;
  const filename = `orcamento-${uuidv4()}.pdf`;
  const filepath = path.join(__dirname, 'orcamentos', filename);

  // Gera o PDF e salva localmente
  htmlPdf.create(html, { format: 'A4' }).toFile(filepath, (err, result) => {
    if (err) {
      console.error('Erro ao gerar PDF:', err);
      return res.status(500).json({ error: 'Erro ao gerar PDF' });
    }

    // Envia por e-mail
    enviarEmail(filepath, filename)
      .then(() => {
        res.json({ message: 'PDF gerado e enviado com sucesso!' });
      })
      .catch((err) => {
        console.error('Erro ao enviar e-mail:', err);
        res.status(500).json({ error: 'Erro ao enviar e-mail' });
      });
  });
});

function enviarEmail(filepath, filename) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou SMTP da sua empresa
      auth: {
        user: 'eletroinformaticaltda@gmail.com',
        pass: 'E9/.,%d$&'
      }
    });

    const mailOptions = {
      from: 'Es Elétrica RJ <eletroinformaticaltda@gmail.com>',
      to: email , // pode ser dinâmico no futuro
      subject: 'Orçamento Solar - Es Elétrica RJ',
      text: 'Segue em anexo o orçamento solar solicitado.',
      attachments: [{
        filename: filename,
        path: filepath
      }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return reject(error);
      resolve(info);
    });
  });
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
