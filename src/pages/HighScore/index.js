import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago, Linha, Lista, Div1, Div2, Divs } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';
import { func } from 'prop-types';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  const [score, setScore] = React.useState([]);
  const [dogMap, setDogMap] = React.useState([]);

  React.useEffect(() => {
    async function getScore() {
      const score = await axios.get('/score');
      setScore(score.data);
    }

    getScore();
  }, [score]);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
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
        <Div1>{dogMap.map((jogador, index) => console.log(jogador))}</Div1>

        <Div2>
          {score.map((jogador, index) => (
            <Lista key={String(jogador.id)}>
              <Linha className="emails">{jogador.nome}</Linha>
              <Linha className="emails">{jogador.points}</Linha>
              <Linha className="emails">{jogador.game}</Linha>
              <Linha className="emails">
                {(() => {
                  if (jogador.game === 'Memória') {
                    return 'M Legitimo';
                  } else if (jogador.game === 'Dog') {
                    return 'Dog legitimo';
                  } else {
                    return 'TESTER';
                  }
                })()}
              </Linha>
            </Lista>
          ))}
        </Div2>
      </Divs>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
