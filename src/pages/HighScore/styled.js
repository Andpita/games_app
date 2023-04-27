import styled from 'styled-components';

export const Title = styled.h1`
  small {
    color: yellow;
    margin-left: 15px;
  }

  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background-color: paleturquoise;
`;

export const Linha = styled.span`
width: 100%;
overflow-y: hidden;
overflow-y: hidden;
`;

export const Paragrago = styled.p`
font-size: 50px
`;

export const Lista = styled.ul`
background-color: azure;
padding: 5px 2px;
display: flex;
justify-content: center;
overflow-y: hidden;
overflow-y: hidden;


.nome {
    padding: 0 0 0 10px;
}

.points {
  text-align: center;
  color: red
}

.pos {
  text-align: center;
  width: 100px;
 }
`;

export const Lista2 = styled.ul`
background-color: burlywood;
padding: 5px 2px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

.pos {
  text-align: center;
  width: 100px;
 }
`;

export const Divs = styled.div`
display: flex;
width: 100%;
`;

export const Div1 = styled.div`
width: 100%;
padding: 20px;
margin: 20px;
background-color: lightcoral;
`;

export const Div2 = styled.div`
width: 100%;
padding: 20px;
margin: 20px;
background-color: lightblue;
`;
