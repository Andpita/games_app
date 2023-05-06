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

export default function SpaceGame() {
  React.useEffect(() => {
    const naves = document.querySelectorAll('.navediv');
    const player = document.querySelector('.player');
    const space = document.querySelector('.space');

    let n;
    let b;
    let endGame = false;
    let pontos = 0;
    let largura = window.screen.width;

    const enviarDados = async () => {
      const namePlayer = localStorage.getItem('playerS');
      const nome = namePlayer;

      const timer = document.querySelector('.points');
      const points = timer.innerText;

      const email = 'none@gmail.com';
      const game = 'Space';

      const { data } = await axios.post(`/score/`, {
        nome,
        points,
        email,
        game,
      });

      console.log(data);
    };

    //Points
    const score = setInterval(() => {
      const pontuacao = document.querySelector('.points');
      let base = 1;
      let positionY = +window.getComputedStyle(player).bottom.replace('px', '');

      if (positionY > 60) {
        base = 1.1;
      }
      if (positionY > 100) {
        base = 1.4;
      }
      if (positionY > 140) {
        base = 1.7;
      }
      if (positionY > 180) {
        base = 2;
      }

      let pontosGanho = 1 * base;
      pontos = pontos + pontosGanho;

      pontuacao.innerHTML = pontos.toFixed(2);

      if (endGame) {
        clearInterval(score);
        setTimeout(() => {
          enviarDados();
        }, 1000);
      }
    }, 500);

    //Music
    const audioPlay = new Audio('./sounds/game.mp3');
    const audioOver = new Audio('./sounds/over.mp3');
    const meteorExp = new Audio('./sounds/exp.mp3');
    const meteorExp2 = new Audio('./sounds/exp.mp3');

    audioOver.volume = 0.15;
    audioPlay.volume = 0.4;
    meteorExp.volume = 0.3;
    meteorExp2.volume = 0.3;

    //Random function
    function randomNumber(max, min) {
      const number = Math.floor(Math.random() * (max - min) + min);
      return number;
    }

    //Loop function
    function loop(n) {
      const variavel = naves[n];

      if (variavel.classList.contains('select')) {
        return;
      }

      variavel.classList.add('select');

      const down = setInterval(() => {
        if (endGame) {
          clearInterval(down);
        }

        if (!variavel) {
          return;
        }

        const pNave = +window.getComputedStyle(variavel).top.replace('px', '');

        if (pNave > 420) {
          variavel.classList.remove('select');
          clearInterval(down);
        }
        if (variavel.classList.contains('select') && pNave === -72) {
          variavel.classList.remove('select');
          clearInterval(down);
        }
      }, 10);
    }

    //CheckColiser
    async function CheckColiser(n) {
      const variavel = naves[n];
      let rangerA;
      let rangerB;

      if (!variavel.classList.contains('select')) {
        return;
      }

      if (n === 0 && largura > 600) {
        rangerA = 0;
        rangerB = 55; //
      }
      if (n === 0 && largura < 600) {
        rangerA = 0;
        rangerB = 27;
      }
      if (n === 1 && largura > 600) {
        rangerA = 40;
        rangerB = 130;
      }
      if (n === 1 && largura < 600) {
        rangerA = 20;
        rangerB = 65;
      }
      if (n === 2 && largura > 600) {
        rangerA = 120;
        rangerB = 200;
      }
      if (n === 2 && largura < 600) {
        rangerA = 60;
        rangerB = 100;
      }
      if (n === 3 && largura > 600) {
        rangerA = 198;
        rangerB = 280;
      }
      if (n === 3 && largura < 600) {
        rangerA = 96;
        rangerB = 140;
      }
      if (n === 4 && largura > 600) {
        rangerA = 270;
        rangerB = 350;
      }
      if (n === 4 && largura < 600) {
        rangerA = 135;
        rangerB = 175;
      }
      if (n === 5 && largura > 600) {
        rangerA = 350;
        rangerB = 432;
      }
      if (n === 5 && largura < 600) {
        rangerA = 175;
        rangerB = 216;
      }
      if (n === 6 && largura > 600) {
        rangerA = 420;
        rangerB = 515;
      }
      if (n === 6 && largura < 600) {
        rangerA = 210;
        rangerB = 257;
      }
      if (n === 7 && largura > 600) {
        rangerA = 495;
        rangerB = 600;
      }
      if (n === 7 && largura < 600) {
        rangerA = 248;
        rangerB = 300;
      }

      const colider = setInterval(() => {
        const pNave = +window.getComputedStyle(variavel).top.replace('px', '');
        let positionX = +window.getComputedStyle(player).left.replace('px', '');
        let positionY = +window
          .getComputedStyle(player)
          .bottom.replace('px', '');

        let limitInferior = 330 - positionY;
        let limitSuperior = limitInferior + 110;
        if (largura < 600) {
          limitInferior = 390 - positionY;
          limitSuperior = limitInferior + 60;
        }

        if (
          positionX >= rangerA &&
          positionX <= rangerB &&
          pNave > limitInferior &&
          pNave < limitSuperior &&
          !variavel.classList.contains('coliderOff')
        ) {
          player.style.backgroundImage = "url('./img/naveExplosion.gif')";
          endGame = true;
          audioOver.play();
          audioPlay.pause();
          setTimeout(() => {
            player.style.backgroundImage = 'none';
          }, 1000);
        } else {
          if (!endGame) {
            return;
          }
        }
      }, 100);
    }

    //Controles
    const move = document.addEventListener('keypress', (e) => {
      if (endGame) {
        return;
      }

      let positionX = +window.getComputedStyle(player).left.replace('px', '');
      let positionY = +window.getComputedStyle(player).bottom.replace('px', '');

      if (e.code === 'KeyA') {
        if (positionX < 10) return;
        player.style.left = `${positionX - 10}px`;
      }

      if (e.code === 'KeyD') {
        if (positionX > 540) return;
        if (largura < 800) {
          if (positionX > 265) return;
          player.style.left = `${positionX + 10}px`;
          console.log('largura MENOR', largura);
        } else {
          player.style.left = `${positionX + 10}px`;
        }
      }

      if (e.code === 'KeyW') {
        if (positionY > 200) return;
        player.style.bottom = `${positionY + 10}px`;
      }

      if (e.code === 'KeyS') {
        if (positionY < 10) return;
        player.style.bottom = `${positionY - 10}px`;
      }

      if (e.code === 'Space') {
        createProjetil();
      }
    });

    const move2 = document.addEventListener('touchstart', (e) => {
      if (endGame) {
        return;
      }

      const click = e.target.innerHTML;
      console.log(e);
      let positionX = +window.getComputedStyle(player).left.replace('px', '');
      let positionY = +window.getComputedStyle(player).bottom.replace('px', '');

      if (click === 'A') {
        if (positionX < 10) return;
        player.style.left = `${positionX - 15}px`;
      } else if (click === 'W') {
        if (positionY > 200) return;
        player.style.bottom = `${positionY + 15}px`;
      } else if (click === 'S') {
        if (positionY < 10) return;
        player.style.bottom = `${positionY - 15}px`;
      } else if (click === 'D') {
        if (positionX > 540) return;
        if (largura < 800) {
          if (positionX > 265) return;
          player.style.left = `${positionX + 10}px`;
          console.log('largura MENOR', largura);
        } else {
          player.style.left = `${positionX + 10}px`;
          console.log('largura MAIOR', largura);
        }
      }
    });

    //Naves Loop
    const system = setInterval(() => {
      n = randomNumber(9, 1);
      b = randomNumber(99, 1);

      if (n === 1) {
        loop(0);
        CheckColiser(0);
        checkDisparo(0);
      }
      if (n === 2) {
        loop(1);
        CheckColiser(1);
        checkDisparo(1);
      }
      if (n === 3) {
        loop(2);
        CheckColiser(2);
        checkDisparo(2);
      }
      if (n === 4) {
        loop(3);
        CheckColiser(3);
        checkDisparo(3);
      }
      if (n === 5) {
        loop(4);
        CheckColiser(4);
        checkDisparo(4);
      }
      if (n === 6) {
        loop(5);
        CheckColiser(5);
        checkDisparo(5);
      }
      if (n === 7) {
        loop(6);
        CheckColiser(6);
        checkDisparo(6);
      }
      if (n === 8) {
        loop(7);
        CheckColiser(7);
        checkDisparo(7);
      }
      if (b === 47) {
        console.log('Cai um bonus :)');
        let municao = document.querySelector('.municao');
        municao.innerHTML = +municao.innerHTML + 1;
      }

      if (endGame) {
        clearInterval(system);
      }
    }, 400);

    const audio = new Promise(function (resolve, reject) {
      resolve(audioPlay.autoplay);
    });

    setTimeout(() => {
      audio.then(audioPlay.play());
    }, 2000);

    //Projetil
    const createProjetil = () => {
      const projeties = document.querySelectorAll('.projetil');
      let municao = document.querySelector('.municao');
      let qtdArma = municao.innerHTML;

      if (projeties.length >= 3) return;
      if (qtdArma < 1) return;

      const projetil = document.createElement('div');
      projetil.classList.add('projetil');
      let positionX = +window.getComputedStyle(player).left.replace('px', '');
      let positionY = +window.getComputedStyle(player).bottom.replace('px', '');
      let projectY = +window
        .getComputedStyle(projetil)
        .bottom.replace('px', '');

      projetil.style.left = `${positionX + 10}px`;
      projetil.style.bottom = `${projectY + positionY + 30}px`;

      space.appendChild(projetil);

      qtdArma--;
      municao.innerHTML = qtdArma;

      return projetil;
    };

    function checkDisparo(n) {
      let rangerA;
      let rangerB;

      if (n === 0 && largura > 600) {
        rangerA = 0;
        rangerB = 55;
      }
      if (n === 0 && largura < 600) {
        rangerA = 0;
        rangerB = 27;
      }
      if (n === 1 && largura > 600) {
        rangerA = 40;
        rangerB = 130;
      }
      if (n === 1 && largura < 600) {
        rangerA = 20;
        rangerB = 65;
      }
      if (n === 2 && largura > 600) {
        rangerA = 120;
        rangerB = 200;
      }
      if (n === 2 && largura < 600) {
        rangerA = 60;
        rangerB = 100;
      }
      if (n === 3 && largura > 600) {
        rangerA = 198;
        rangerB = 280;
      }
      if (n === 3 && largura < 600) {
        rangerA = 96;
        rangerB = 140;
      }
      if (n === 4 && largura > 600) {
        rangerA = 270;
        rangerB = 350;
      }
      if (n === 4 && largura < 600) {
        rangerA = 135;
        rangerB = 175;
      }
      if (n === 5 && largura > 600) {
        rangerA = 350;
        rangerB = 432;
      }
      if (n === 5 && largura < 600) {
        rangerA = 175;
        rangerB = 216;
      }
      if (n === 6 && largura > 600) {
        rangerA = 420;
        rangerB = 515;
      }
      if (n === 6 && largura < 600) {
        rangerA = 210;
        rangerB = 257;
      }
      if (n === 7 && largura > 600) {
        rangerA = 495;
        rangerB = 600;
      }
      if (n === 7 && largura < 600) {
        rangerA = 248;
        rangerB = 300;
      }

      const testeTiro = setInterval(() => {
        const projetil = document.querySelector('.projetil');
        if (!projetil) return;

        //projetil
        const positionYProjetil = +window
          .getComputedStyle(projetil)
          .top.replace('px', '');
        if (positionYProjetil < 10) {
          projetil.remove();
        }

        //Return sem nave;
        const variavel = naves[n];
        if (!variavel) return;

        //nave X e Y
        const Xnave = +window.getComputedStyle(variavel).top.replace('px', '');
        let positionX = +window.getComputedStyle(player).left.replace('px', '');

        if (
          positionX >= rangerA &&
          positionX <= rangerB &&
          Xnave + 30 > positionYProjetil
        ) {
          meteorExp.play();

          variavel.style.backgroundImage = "url('./img/explosion.gif')";
          projetil.remove();
          variavel.classList.add('coliderOff');

          setTimeout(() => {
            variavel.classList.remove('select');
            variavel.style.backgroundImage = "url('./img/cometa.gif')";
            variavel.classList.remove('coliderOff');
          }, 500);
        }
      }, 10);
    }
  }, []);

  return (
    <Container>
      <section className="containerSpace">
        <div className="meta">
          <div className="_nome divArc">
            Nome <span className="name"> Teste</span>
          </div>
          <div className="pontos divArc">
            Score <span className="points">0</span>
          </div>
          <div className="_minucao divArc">
            Munição <span className="municao">5</span>
          </div>
        </div>
        <div className="space">
          <div className="navediv nave1"></div>
          <div className="navediv nave2"></div>
          <div className="navediv nave3"></div>
          <div className="navediv nave4"></div>
          <div className="navediv nave5"></div>
          <div className="navediv nave6"></div>
          <div className="navediv nave7"></div>
          <div className="navediv nave8"></div>
          <div className="player"></div>
        </div>
      </section>
      <div className="controls">
        <div className="left">A</div>
        <div className="up">W</div>
        <div className="down">D</div>
        <div className="rigth">S</div>
      </div>
    </Container>
  );
}
