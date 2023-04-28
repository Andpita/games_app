import styled from 'styled-components';

export const Title = styled.h1`
  small {
    color: yellow;
    margin-left: 15px;
  }

  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background-color: paleturquoise;
`;

export const Paragrago = styled.p`
font-size: 50px;
`;

export const ImgInitial = styled.img`
  width: 100%;
`;

export const Formulario = styled.div`
display: flex;
align-items: center;
justify-content: center;

h2 {
  margin: 10px;
}

.image {
  width: 200px;
  margin: 10px auto;
}
`;
