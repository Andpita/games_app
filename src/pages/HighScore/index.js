import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyle';
import {
  Title,
  Paragrago,
  Linha,
  Lista,
  Lista2,
  Div1,
  Div2,
  Divs,
} from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';
import { func } from 'prop-types';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  const [score, setScore] = React.useState([]);
  const [dogGame, setDogGame] = React.useState([]);
  const [memoGame, setMemoGame] = React.useState([]);

  React.useEffect(() => {
    const scoreDogs = [];
    const scoreMemo = [];

    async function getScore() {
      const score = await axios.get('/score');
      setScore(score.data);
    }

    getScore();

    /* async function dataGameDog() {
      const todosScores = await [...score];
      const arraydogs = todosScores.map((jogador) => {
        if (jogador.game === 'Dog') {
          scoreDogs.push(jogador);
        }
        setDogGame(scoreDogs);
      });
    }*/

    async function dataGameDog() {
      const todosScores = await [...score];
      const arraydogs = todosScores.map((jogador) => {
        if (jogador.game === 'Dog') {
          scoreDogs.push(jogador);
        }
        setDogGame(scoreDogs);

        const novoArray = [...scoreDogs];
        const ordenado = novoArray.sort((jogadorA, jogadorB) => {
          if (jogadorA.points < jogadorB.points) {
            return 1;
          } else {
            return -1;
          }
        });
        setDogGame(ordenado);
      });
    }

    dataGameDog();

    async function dataGameMemo() {
      const todosScores = await [...score];
      const arraydogs = todosScores.map((jogador) => {
        if (jogador.game === 'Memória') {
          scoreMemo.push(jogador);
        }
        setMemoGame(scoreMemo);
      });
    }

    dataGameMemo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    console.log(memoGame, dogGame);
  }

  return (
    <Container>
      <Title isRed={false}>
        Página de Login
        <small>Olá mundo!</small>
      </Title>
      <Paragrago>Lorem ipsum solor sit amet.</Paragrago>
      <Linha> Nome / Pontos / jogo </Linha>

      <Divs>
        <Div1>
          JOGO DO CACHORRINHO
          <Lista2>
            <Linha className="pos">P</Linha>
            <Linha>Nick</Linha>
            <Linha>Pontos</Linha>
          </Lista2>
          {dogGame.map((jogador, index) => {
            const indexNew = index + 1;

            return (
              <Lista key={String(jogador.id)}>
                <Linha className="pos">{indexNew}</Linha>
                <Linha className="nome">{jogador.nome}</Linha>
                <Linha className="points">{jogador.points} </Linha>
              </Lista>
            );
          })}
        </Div1>

        <Div2>
          JOGO DA MEMÓRIA
          <Lista2>
            <Linha className="pos">P</Linha>
            <Linha>Nick</Linha>
            <Linha>Pontos</Linha>
          </Lista2>
          {memoGame.map((jogador, index) => {
            const indexNew = index + 1;

            return (
              <Lista key={String(jogador.id)}>
                <Linha className="pos">{indexNew}</Linha>
                <Linha className="nome">{jogador.nome}</Linha>
                <Linha className="points">{jogador.points}</Linha>
              </Lista>
            );
          })}
        </Div2>
      </Divs>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
