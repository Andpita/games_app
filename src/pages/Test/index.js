import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  React.useEffect(() => {
    async function getScore() {
      console.log('teste1');
      const score = await axios.get('/score');
      console.log('teste1');
      const { data } = score;
      console.log('teste3');
      console.log(data);
      console.log('teste4');
    }

    getScore();
  }, []);

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
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
