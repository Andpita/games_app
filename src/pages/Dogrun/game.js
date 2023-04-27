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
  React.useEffect(() => {
    const score = document.querySelector('.points');
    const player = document.querySelector('.changeName');
    const nuvem = document.querySelector('.clouds');

    let flag = 0;
    const mode = 'isRun';

    const exec = () => {
      const namePlayer = localStorage.getItem('playerD');
      player.innerHTML = namePlayer;
    };

    document.addEventListener('keypress', (e) => {
      if (flag === 0) {
        jump();
      } else {
        return;
      }
    });

    const jump = () => {
      const dog = document.querySelector('.dog');

      if (mode === 'isRun') {
        if (!dog) {
          return;
        }

        flag = 1;
        dog.classList.add('dogjump');

        setTimeout(() => {
          dog.classList.remove('dogjump');
          flag = 0;
        }, 750);
      }
    };

    const loop = setInterval(() => {
      const arbusto = document.querySelector('.arbusto');
      if (arbusto) {
        const arbustoPosition = arbusto.offsetLeft;

        arbusto.style.animation = 'arbustoMove 2s infinite linear';
        nuvem.style.animation = 'nuvens 22s infinite linear';

        const dog = document.querySelector('.dog');
        const dogPosition = +window
          .getComputedStyle(dog)
          .bottom.replace('px', '');

        if (
          arbustoPosition <= 130 &&
          arbustoPosition >= -20 &&
          dogPosition < 50
        ) {
          console.log('morreu');
          //Definindo posição do arbusto;
          arbusto.style.animation = 'none';
          arbusto.style.left = `${arbustoPosition}px`;

          //definindo posição do dog;
          dog.src = './img/god.png';
          dog.style.bottom = `${dogPosition}px`;
          dog.style.animation = 'none';

          mode === 'dead';
          clearInterval(loop);
          clearInterval(looppoint);

          enviarDados();
        }
      } else {
        return;
      }
    }, 50);

    const enviarDados = async () => {
      const namePlayer = localStorage.getItem('playerD');
      const nome = namePlayer;

      const timer = document.querySelector('.points');
      const points = timer.innerText;

      const email = 'none@gmail.com';
      const game = 'Dog';

      clearInterval(loop);

      const { data } = await axios.post(`/score/`, {
        nome,
        points,
        email,
        game,
      });

      console.log(data);
    };

    const looppoint = setInterval(() => {
      let currentTime;
      currentTime = +score.innerHTML;
      score.innerHTML = currentTime + 1;

      if (score.innerHTML < 10) {
        score.innerHTML = `0${score.innerHTML}`;
        console.log(score.innerHTML);
      }

      if (mode === 'dead') {
        clearInterval(looppoint);
      }
    }, 1000);

    exec();
  }, []);

  return (
    <Container className="dogRumOn">
      <div className="score">
        SCORE <span className="points">00</span>
      </div>
      <div className="name">
        Nome <span className="changeName">Nome</span>
      </div>
      <div className="container">
        <img src="./img/dog.webp" className="dog"></img>
        <img src="./img/arbusto.png" className="arbusto"></img>
        <img src="./img/clouds.png" className="clouds"></img>
      </div>
    </Container>
  );
}
