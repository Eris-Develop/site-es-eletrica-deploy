        
       function imprimirResultado() {
        window.print();
          }
                      
      function compartilhar() {
        if (navigator.share) {
          navigator.share({
            title: 'Simule sua usina solar com a Es Elétrica RJ!',
            text: 'Calcule sua economia e comece a gerar sua própria energia.',
            url: window.location.href
          });
        } else {
          alert('Compartilhamento não suportado neste navegador. Copie o link: ' + window.location.href);
        }
      }
    
document.getElementById('solarForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const conta = parseFloat(document.getElementById('conta').value);
  const tarifa = parseFloat(document.getElementById('concessionaria').value);
  const select = document.getElementById("concessionaria");
  const resultconcessionaria = select.options[select.selectedIndex].text;
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const telefone = parseInt(document.getElementById('telefone').value);
  const quando = document.getElementById('quando').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;

  const calcular = document.getElementById("calcular");
  calcular.textContent = "Refazer";

  if (isNaN(conta) || conta < 270 || isNaN(tarifa) || conta > 10000) {
    alert("Informe um valor de conta acima de R$ 270 e selecione uma concessionária.");
    return;
  }

  const kwh = conta / tarifa;
  const kwp = (kwh / 0.78) / 5 / 30;
  const potencia = kwp.toFixed(2);
  const economia = (conta * 12).toFixed(2);
  const investimento = (kwp * 2400).toFixed(2);

  // Tabela cartão de crédito (1 a 24x) com juros progressivos a partir de 3.99%
  let tabelaCartao = '<h4>Simulação no Cartão de Crédito (1x a 24x)</h4><div class="container-tabela" ><table><tr><th>Parcelas</th><th>Valor Parcela (R$)</th><th>Juros</th></tr>';
  for (let i = 1; i <= 24; i++) {
    const juros = 1 + ((3.99 + (i * 0.1)) / 100);
    const valorParcela = ((investimento * juros) / i).toFixed(2);
    tabelaCartao += `<tr><td>${i}x</td><td>R$ ${valorParcela}</td><td>R$ ${juros}</td></tr>`;
  }
  tabelaCartao += '</table></div>';

  // Tabela financiamento (20 a 84x) com juros progressivos a partir de 1.45%
  let tabelaFinanciamento = '<h4>Simulação por Financeira (20x a 84x)</h4><table><tr><th>Parcelas</th><th>Valor Parcela (R$)</th><th>Juros</th></tr>';
  for (let i = 20; i <= 84; i++) {
    const juros = 1 + ((1.45 + (i * 0.05)) / 100);
    const valorParcela = ((investimento * juros) / i).toFixed(2);
    tabelaFinanciamento += `<tr><td>${i}x</td><td>R$ ${valorParcela}</td><td>R$ ${juros}</td></tr>`;
  }
  tabelaFinanciamento += '</table>';

  document.getElementById('printArea').innerHTML = `
    <h3>Resultado da Simulação</h3>
    <p><strong>Cliente:</strong> ${nome}  ${sobrenome}</p>
     <p><strong>Telefone:</strong> ${telefone} </p>
      <p><strong>E-mail:</strong> ${email} </p>
      <p><strong>Cidade:</strong> ${cidade} </p>
      <p><strong>Estado:</strong> ${estado} </p>
      <p><strong>Concessionaria:</strong> ${resultconcessionaria} </p>
      <p><strong>Pretende instalar o sistema em:</strong> ${quando} </p>
    <p><strong>Potência estimada do sistema:</strong> ${potencia} kWp</p>
    <p><strong>Consumo médio mensal:</strong> ${kwh.toFixed(0)} kWh</p>
    <p><strong>Economia anual estimada:</strong> R$ ${economia}</p>
    <p><strong>Investimento estimado:</strong> R$ ${investimento}</p>
    ${tabelaCartao}
    ${tabelaFinanciamento}
    <canvas id="grafico" style="max-width: 100%;"></canvas>
  `;

  document.getElementById('botoesAcao').style.display = 'flex';
  document.getElementById('resultado').style.display = 'block';
  
  gerarGrafico(kwh);
});

      function gerarGrafico(kwh) {
        const ctx = document.getElementById('grafico').getContext('2d');
        const fatorMensal = [1.1, 1.0, 0.95, 0.9, 0.85, 0.9, 1.0, 1.05, 1.1, 1.2, 1.15, 1.1];
        const geracaoMensal = fatorMensal.map(f => (kwh * f).toFixed(0));
    
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
              label: 'Geração (kWh)',
              data: geracaoMensal,
              backgroundColor: '#0a3d62'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            scales: {
              y: { beginAtZero: true }
            }
          }
        });
      }
    
//cokies
//-------------------------------    
 function aceitarCookies() {
    localStorage.setItem("cookieConsent", "true");
    document.getElementById("cookie-banner").style.display = "none";
  }

  window.onload = function () {
    if (localStorage.getItem("cookieConsent") === "true") {
      document.getElementById("cookie-banner").style.display = "none";
    }
  };
   
  // dificultando acesso ao condigo
   document.addEventListener('contextmenu', event => event.preventDefault());


   document.onkeydown = function(e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "i") ||
      (e.ctrlKey && e.key === "u")||
       (e.ctrlKey && e.key === "U")
    ) {
      return false;
    }
  };