import styled, { createGlobalStyle } from 'styled-components';
import {
  color1,
  color2,
  color3,
  errorColor,
  sucessColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${color1};
    color: ${color1};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${color2};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: ${color3};
  }

  ul {
    list-style: none;
  }

  input {
     padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }
`;

export const Container = styled.section`
  max-width: 1000px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  background-color:  ${(props) => {
    if (props.isDog) return 'lightgreen';
    if (props.isMemo) return 'salmon';
    if (props.isSpace) return 'gray';
    return 'white';
  }};

@media (max-width: 360px) {
  font-size: 12px;
  margin: 2px auto;
  padding: 2px;
}
`;
