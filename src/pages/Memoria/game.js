/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago, ImgInitial } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function MemoriaGame() {
  // const [tempo, setTempo] = React.useState('');
  // const [nome, setNome] = React.useState('');
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
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

    const grid = document.querySelector('.grid');
    const timer = document.querySelector('.timer');
    const player = document.querySelector('.player');

    const createElement = (tag, className) => {
      const element = document.createElement(tag);
      element.className = className;
      return element;
    };

    let primeiroCard = '';
    let segundoCard = '';
    let end = false;

    const checkEndGame = async () => {
      const disabledCards = document.querySelectorAll('.disabled-card');

      if (disabledCards.length === 20) {
        alert(`teste`);
        end = true;

        const namePlayer = localStorage.getItem('player');
        const nome = namePlayer;

        const timer = document.querySelector('.timer');
        const points = timer.innerText;

        const email = 'none@gmail.com';
        const game = 'Memória';

        clearInterval(loop);

        const { data } = await axios.post(`/score/`, {
          nome,
          points,
          email,
          game,
        });

        console.log(data);
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

      front.style.backgroundImage = `url(./img/${img}.png`;

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

    const loop = setInterval(() => {
      let currentTime;
      currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;

      if (timer.innerHTML < 10) {
        timer.innerHTML = `0${timer.innerHTML}`;
        console.log(timer.innerHTML);
      }

      if (end === true) {
        clearInterval(loop);
        console.log('111111');
      }
    }, 1000);

    const exec = () => {
      {
        const namePlayer = localStorage.getItem('player');
        player.innerHTML = namePlayer;
        loadGame();
        loop;
      }
      console.log('morreu');
    };

    exec();
  }, []);

  return (
    <Container>
      <div className="containerz">
        <h1 className="temp">Memory Game v1</h1>
        <header className="header">
          <span>
            <b>Player</b>: <span className="player">Player</span>
          </span>
          <span>
            <b>Tempo</b>: <span className="timer">00</span>
          </span>
        </header>
      </div>
      <div className="grid"></div>
      <footer className="content">
        <h4>Esse é um site teste criado por Anderson Silva</h4>
        <p>
          Entre em contato em <a>dev.andpita@gmail.com</a>
        </p>
        <p>
          v1.0.0 - <a>01/04/2023</a>
        </p>
      </footer>
      <div className="App">
        <header className="App-header">
          {seconds} seconds have elapsed since mounting.
        </header>
      </div>
    </Container>
  );
}
