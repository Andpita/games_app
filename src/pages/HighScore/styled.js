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
  color: red;
  max-width: 24%;
}

.pos {
  text-align: center;
  max-width: 10%;
 }


 @media (max-width: 700px) {
  .points {
  max-width: 40px;
   }

   @media (max-width: 350px) {
  .nome {
   font-size: 12px;
   }
   .points {
    font-size: 12px;

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
display: grid;
grid-template-columns: repeat(2, 1fr);
min-width: 260px;
max-width: 100%;
gap: 15px;

@media (max-width: 700px) {
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
}
`;

export const Div1 = styled.div`
width: 100%;
padding: 10px 20px 20px 20px;
margin: 10px 20px 10px 10px;
background-color: lightgreen;
border-radius: 7px;
`;

export const Div2 = styled.div`
width: 100%;
padding: 10px 20px 20px 20px;
margin: 10px 20px 10px 10px;
background-color: salmon;
border-radius: 7px;
`;

export const P2 = styled.p`
padding: 1px 20px;
`;
