const kits = [
<<<<<<< HEAD
    {
      nome: "Kit Solar 1",
      imagem: "./img/eletrica.jpg",
      potencia: "3 kWp",
      preco: "R$ 12.000,00",
      garantia: "10 anos",
      estrelas: 5
    },
    {
      nome: "Kit Solar 2",
      imagem: "./img/eletrica.jpg ",
      potencia: "4 kWp",
      preco: "R$ 15.000,00",
      garantia: "12 anos",
      estrelas: 4
    },
    {
      nome: "Kit Solar 3",
      imagem: "./img/eletrica.jpg",
      potencia: "5 kWp",
      preco: "R$ 18.000,00",
      garantia: "15 anos",
      estrelas: 5
    },
    {
      nome: "Kit Solar 4",
      imagem: "./img/eletrica.jpg",
      potencia: "6 kWp",
      preco: "R$ 21.000,00",
      garantia: "10 anos",
      estrelas: 4
    },
    {
      nome: "Kit Solar 5",
      imagem: "./img/eletrica.jpg",
      potencia: "7 kWp",
      preco: "R$ 24.000,00",
      garantia: "12 anos",
      estrelas: 5
    },
    {
      nome: "Kit Solar 6",
      imagem: "./img/eletrica.jpg ",
      potencia: "8 kWp",
      preco: "R$ 27.000,00",
      garantia: "15 anos",
      estrelas: 5
    }
  ];
  
  const slider = document.querySelector('.slider2');
  
  // Inserir os cards no slider
  kits.forEach(kit => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${kit.imagem}" alt="${kit.nome}">
      <h3>${kit.nome}</h3>
      <div class="potencia">🔋 Potência: ${kit.potencia}</div>
      <div class="preco">💰 Preço: ${kit.preco}</div>
      <div class="garantia">🛡️ Garantia: ${kit.garantia}</div>
      <div class="estrelas">${'★'.repeat(kit.estrelas)}${'☆'.repeat(5 - kit.estrelas)}</div>
      <button class="cupom">Aplicar Cupom</button>
    `;
    slider.appendChild(card);
  });
  
  // Funcionalidade do carrossel
  let currentIndex = 0;
  
  function updateSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // largura + margem
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
  
  document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < kits.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  
=======
  {
    nome: "Kit Solar 1",
    imagem: "./img/eletrica.jpg",
    potencia: "3 kWp",
    preco: "R$ 12.000,00",
    garantia: "10 anos",
    estrelas: 5
  },
  {
    nome: "Kit Solar 2",
    imagem: "./img/eletrica.jpg",
    potencia: "4 kWp",
    preco: "R$ 15.000,00",
    garantia: "12 anos",
    estrelas: 4
  },
  {
    nome: "Kit Solar 3",
    imagem: "./img/eletrica.jpg",
    potencia: "5 kWp",
    preco: "R$ 18.000,00",
    garantia: "15 anos",
    estrelas: 5
  },
  {
    nome: "Kit Solar 4",
    imagem: "./img/eletrica.jpg",
    potencia: "6 kWp",
    preco: "R$ 21.000,00",
    garantia: "10 anos",
    estrelas: 4
  },
  {
    nome: "Kit Solar 5",
    imagem: "./img/eletrica.jpg",
    potencia: "7 kWp",
    preco: "R$ 24.000,00",
    garantia: "12 anos",
    estrelas: 5
  },
  {
    nome: "Kit Solar 6",
    imagem: "./img/eletrica.jpg",
    potencia: "8 kWp",
    preco: "R$ 27.000,00",
    garantia: "15 anos",
    estrelas: 5
  }
];

const slider = document.querySelector('.slider2');

kits.forEach(kit => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = kit.imagem;
  img.alt = kit.nome;

  const titulo = document.createElement('h3');
  titulo.textContent = kit.nome;

  const potencia = document.createElement('div');
  potencia.className = 'potencia';
  potencia.textContent = `🔋 Potência: ${kit.potencia}`;

  const preco = document.createElement('div');
  preco.className = 'preco';
  preco.textContent = `💰 Preço: ${kit.preco}`;

  const garantia = document.createElement('div');
  garantia.className = 'garantia';
  garantia.textContent = `🛡️ Garantia: ${kit.garantia}`;

  const estrelas = document.createElement('div');
  estrelas.className = 'estrelas';
  estrelas.textContent = '★'.repeat(kit.estrelas) + '☆'.repeat(5 - kit.estrelas);

  const botaoCupom = document.createElement('button');
  botaoCupom.className = 'cupom';
  botaoCupom.textContent = 'Aplicar Cupom';

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(potencia);
  card.appendChild(preco);
  card.appendChild(garantia);
  card.appendChild(estrelas);
  card.appendChild(botaoCupom);

  slider2.appendChild(card);
});

let currentIndex = 0;

function updateSlider() {
  const cardWidth = document.querySelector('.card').offsetWidth + 20; // largura + margem
  slider2.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < kits.length - 1) {
    currentIndex++;
    updateSlider2();
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider2();
  }
});

// Funcionalidade do cupom
document.getElementById('aplicar-cupom').addEventListener('click', () => {
  const codigo = document.getElementById('codigo-cupom').value.trim();
  const mensagem = document.getElementById('mensagem-cupom');
  if (codigo === 'EXEMPLO10') {
    mensagem.textContent = 'Cupom aplicado com sucesso! Você ganhou 10% de desconto.';
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = 'Cupom inválido. Tente novamente.';
    mensagem.style.color = 'red';
  }
});
>>>>>>> baef5e4 (Mensagem)
