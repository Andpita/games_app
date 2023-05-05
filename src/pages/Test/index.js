import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago, Jogos, ImgInitial, ImgInitial2 } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  const history = useHistory();

  function handleClickDog(e) {
    e.preventDefault();
    history.push('/dog');
  }

  function handleClickMemory(e) {
    e.preventDefault();
    history.push('/memoria');
  }

  function handleClickSpace(e) {
    e.preventDefault();
    history.push('/space');
  }

  return (
    <Container>
      <Title isRed={true}>PAGINA INICIAL</Title>
      <Jogos>
        <div className="jogo1">
          <ImgInitial src="./img/dog.png" onClick={handleClickDog} />
          <p>Dog Run</p>
        </div>
        <div className="jogo2">
          <ImgInitial2 src="./img/memo.png" onClick={handleClickMemory} />
          <p>Memória</p>
        </div>
        <div className="jogo3">
          <ImgInitial src="./img/space.png" onClick={handleClickSpace} />
          <p>Navezinha</p>
        </div>
        <div className="jogo4">
          <ImgInitial src="./img/samurai.png" />
          <p>Samurai Wars</p>
        </div>
      </Jogos>
    </Container>
  );
}
