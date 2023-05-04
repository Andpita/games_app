import styled from 'styled-components';

export const Title = styled.h1`
  small {
    color: yellow;
    margin-left: 15px;
  }

  text-align: center;
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background-color: paleturquoise;

  //media 900
  @media (max-width: 900px) {

  max-width: 600px;
  margin: 0 auto;
}
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

@media (max-width: 600px) {
flex-direction: column;
}

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

  //media 900
  @media (max-width: 900px) {

  width: 150px;
  height: 150px;
  }

  @media (max-width: 600px) {
    width: 100%;
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
  cursor: pointer;

}
.jogo4 {
  background-color: lightsteelblue;
  cursor: not-allowed;
}
`;

export const ImgInitial = styled.img`
  width: 180px;
  height: 180px;

  //media 900
  @media (max-width: 900px) {

  width: 90px;
  height: 90px;
  }

`;

export const ImgInitial2 = styled.img`
  width: 220px;
  height: 180px;

  //media 900
  @media (max-width: 900px) {

  width: 110px;
  height: 90px;
  }
}
`;
