import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago, ImgInitial } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  const history = useHistory();
  const [nome, setNome] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('player', nome);
  }, [nome]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/playMemory');
  };

  return (
    <Container>
      Pagina do joguinho da memoria
      <form className="form" onSubmit={handleSubmit}>
        <h2>Jogo da Memória v1</h2>

        <ImgInitial src="./img/memo.png" />

        <div>
          <input
            type="text"
            name="nome"
            id="nome"
            className="player"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
          <button type="submit" className="input_button">
            Play
          </button>
        </div>
      </form>
    </Container>
  );
}
