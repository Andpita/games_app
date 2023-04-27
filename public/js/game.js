const grid = document.querySelector('.grid');
const player = document.querySelector('.player');
const timer = document.querySelector('.timer');

const images = [
  'badfofo',
  'claytinho',
  'finaleste',
  'fofolete',
  'gersu',
  'human',
  'nelson',
  'penisvaldo',
  'superofof',
  'zozocop',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let primeiroCard = '';
let segundoCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    const finalTempo = clearInterval(this.loop);
    alert(
      `Final: Nome: ${player.innerHTML}, seu tempo foi ${timer.innerHTML}s`,
    );
  }
};

const checkCards = () => {
  const first = primeiroCard.getAttribute('data-name');
  const second = segundoCard.getAttribute('data-name');

  if (first === second) {
    primeiroCard.firstChild.classList.add('disabled-card');
    segundoCard.firstChild.classList.add('disabled-card');

    setTimeout(() => {
      primeiroCard = '';
      segundoCard = '';

      checkEndGame();
    }, 400);
  } else {
    setTimeout(() => {
      primeiroCard.classList.remove('reveal-card');
      segundoCard.classList.remove('reveal-card');

      primeiroCard = '';
      segundoCard = '';
    }, 800);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (primeiroCard === '') {
    target.parentNode.classList.add('reveal-card');
    primeiroCard = target.parentNode;
  } else if (segundoCard === '') {
    target.parentNode.classList.add('reveal-card');
    segundoCard = target.parentNode;

    checkCards();
  }
};

const createCard = (img) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'front face');
  const back = createElement('div', 'back face');

  front.style.backgroundImage = `url(../image/${img}.png`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-name', img);

  return card;
};

const loadGame = () => {
  const duplicateImages = [...images, ...images];
  const embaralhar = duplicateImages.sort(() => Math.random() - 0.5);

  embaralhar.forEach((image) => {
    const card = createCard(image);
    grid.appendChild(card);
  });
};

const tempoGame = () => {
  this.loop = setInterval(() => {
    let currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

    if (timer.innerHTML < 10) {
      timer.innerHTML = `0${timer.innerHTML}`;
    }
  }, 1000);
};

window.onload = () => {
  const namePlayer = localStorage.getItem('player');
  player.innerHTML = namePlayer;
  tempoGame();

  loadGame();
};
