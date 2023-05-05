import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrago, ImgInitial, Formulario } from './styled';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Test() {
  //toast.success('Teste sucesso!');
  //toast.error('Teste sucesso!');

  const history = useHistory();
  const [nome, setNome] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('playerS', nome);
  }, [nome]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/playSpace');
  };

  return (
    <Container isSpace={true}>
      <Formulario>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Dog Run v1</h2>
          <div className="image">
            <ImgInitial src="./img/space.png" />
          </div>
          <div>
            <input
              type="text"
              name="nome"
              id="nome"
              className="playerName"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
            <button type="submit" className="input_button">
              Play
            </button>
          </div>
        </form>
      </Formulario>
    </Container>
  );
}
