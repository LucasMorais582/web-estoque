import { createGlobalStyle } from 'styled-components';
import estoqueBackground from '../assets/estoque4.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #FFF url(${estoqueBackground}) no-repeat 87% top;
    background-position-y: 50px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
