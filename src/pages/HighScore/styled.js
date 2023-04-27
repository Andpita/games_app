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
`;

export const Paragrago = styled.p`
font-size: 50px
`;

export const Lista = styled.ul`
`;

export const Divs = styled.div`
display: flex;
`;

export const Div1 = styled.div`

background-color: gray;
`;

export const Div2 = styled.div`

background-color: greenyellow;
`;
