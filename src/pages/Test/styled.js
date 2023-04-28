import styled from 'styled-components';

export const Title = styled.h1`
  small {
    color: yellow;
    margin-left: 15px;
  }

  text-align: center;
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background-color: paleturquoise;
`;

export const Paragrago = styled.p`
font-size: 50px;
`;

export const Jogos = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

div {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    padding-top: 10px;
  }
}

.jogo1 {
  background-color: lightgreen;
  cursor: pointer;
}
.jogo2 {
  background-color: salmon;
  cursor: pointer;
}
.jogo3 {
  background-color: gray;
}
.jogo4 {
  background-color: lightsteelblue;
}
`;

export const ImgInitial = styled.img`
  width: 180px;
  height: 180px;
`;

export const ImgInitial2 = styled.img`
  width: 220px;
  height: 180px;
`;
