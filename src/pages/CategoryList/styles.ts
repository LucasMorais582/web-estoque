import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 750px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
    color: #666;
  }

  svg {
    margin-right: 4px;
  }
  }
`;

export const Button = styled.button`
      margin-right: 40px;
      width: 300px;
      height: 50px;
      background: #FFCE33;
      border-radius: 5px 5px 5px 5px;
      border: 0;
      color: #3a3a3a;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-top: 70px;
      /* Indicação de que o hover é do button */
      &:hover {
        background: ${shade(0.2, '#FFE333')};
      }
`;

export const Categories = styled.form`
  margin-top: 20px;
  max-width: 1500px;

  a + a {
    margin-top: 16px;
  }

  a {
      background: #F0F0F5;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      display: flex;
      text-decoration: none;
      align-items: center;
      transition:  0.2s;

    /* Indicação de que o hover é do button */
    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 35px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;


