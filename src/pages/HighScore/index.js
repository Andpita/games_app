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
  P2,
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
  const [spaceGame, setSpaceGame] = React.useState([]);

  React.useEffect(() => {
    const scoreDogs = [];
    const scoreMemo = [];
    const scoreSpace = [];

    async function getScore() {
      const score = await axios.get('/score');
      setScore(score.data);
    }

    getScore();

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

        const novoArray = [...scoreMemo];
        const ordenado = novoArray.sort((jogadorA, jogadorB) => {
          if (jogadorA.points > jogadorB.points) {
            return 1;
          } else {
            return -1;
          }
        });
        setMemoGame(ordenado);
      });
    }

    dataGameMemo();

    async function dataGameSpace() {
      const todosScores = await [...score];
      const arraydogs = todosScores.map((jogador) => {
        if (jogador.game === 'Space') {
          scoreSpace.push(jogador);
        }
        setSpaceGame(scoreSpace);

        const novoArray = [...scoreSpace];
        const ordenado = novoArray.sort((jogadorA, jogadorB) => {
          if (jogadorA.points < jogadorB.points) {
            return 1;
          } else {
            return -1;
          }
        });
        setSpaceGame(ordenado);
      });
    }

    dataGameSpace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    console.log(memoGame, dogGame);
  }

  return (
    <Container>
      <Paragrago>Highscores:</Paragrago>
      <P2> Os 10 melhores classificados: </P2>

      <Divs>
        <Div1>
          <Title>DOG RUN</Title>
          <Lista2>
            <Linha className="pos"></Linha>
            <Linha>Nick</Linha>
            <Linha>Pontos</Linha>
          </Lista2>
          {dogGame.map((jogador, index) => {
            const indexNew = index + 1;
            if (indexNew > 10) {
              return;
            }

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
          <Title>JOGO DA MEMÓRIA</Title>
          <Lista2>
            <Linha className="pos"></Linha>
            <Linha>Nick</Linha>
            <Linha>Pontos</Linha>
          </Lista2>
          {memoGame.map((jogador, index) => {
            const indexNew = index + 1;

            if (indexNew > 10) {
              return;
            }
            return (
              <Lista key={String(jogador.id)}>
                <Linha className="pos">{indexNew}</Linha>
                <Linha className="nome">{jogador.nome}</Linha>
                <Linha className="points">{jogador.points} s</Linha>
              </Lista>
            );
          })}
        </Div2>

        <Div2>
          <Title>JOGO DA NAVE</Title>
          <Lista2>
            <Linha className="pos"></Linha>
            <Linha>Nick</Linha>
            <Linha>Pontos</Linha>
          </Lista2>
          {spaceGame.map((jogador, index) => {
            const indexNew = index + 1;

            if (indexNew > 10) {
              return;
            }
            return (
              <Lista key={String(jogador.id)}>
                <Linha className="pos">{indexNew}</Linha>
                <Linha className="nome">{jogador.nome}</Linha>
                <Linha className="points">{jogador.points} s</Linha>
              </Lista>
            );
          })}
        </Div2>
      </Divs>
    </Container>
  );
}
