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

export const Data = styled.form`
  flex: 1;

  textarea {
    resize: none;
    border-radius: 5px;
    font-size: 20px;
    color: #3d3d4d;
    width: 500px;
  }

  p {
    max-width: 120px;
    margin-top: 10px;
    margin-left: 100px;
    font-size: 18px;
    color: #a8a8b3;
    word-wrap: break-word;
  }
`;

export const Product = styled.form`
  margin-top: 60px;
  header {
    display: flex;
    align-items: center;
    flex: 1;
  }

  div {
      background: #F0F0F5;
      border-radius: 5px;
      min-height: 300px;
      padding: 24px;
      display: block;
      display: flex;
      text-decoration: none;
      align-items: center;
      transition:  0.2s;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    button {
      width: 150px;
      height: 50px;
      background: #04d361;
      border-radius: 5px 5px 5px 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-top: 140%;
      /* Indicação de que o hover é do button */
      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }
`;
