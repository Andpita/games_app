import styled from 'styled-components';

export const Title = styled.h1`
  small {
    color: black;
    margin-left: 15px;
  }

  color: ${(props) => (props.isRed ? 'red' : 'gray')};
  background-color: paleturquoise;

  text-align: center;
  margin: 10px;
  border-radius: 7px;
`;

export const Linha = styled.span`
width: 100%;
overflow-y: hidden;
overflow-y: hidden;
`;

export const Paragrago = styled.p`
font-size: 40px;
padding: 10px 20px;
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
padding: 10px 20px 20px 20px;
margin: 20px;
background-color: lightcoral;
border-radius: 7px;
`;

export const Div2 = styled.div`
width: 100%;
padding: 10px 20px 20px 20px;
margin: 20px;
background-color: lightblue;
border-radius: 7px;
`;

export const P2 = styled.p`
padding: 1px 20px;
`;
