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

export const ButtonDelete = styled.button`
      margin-top: 60%;
      margin-left: 20px;
      width: 150px;
      height: 50px;
      background: #FF4933;
      border-radius: 5px 5px 5px 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      /* Indicação de que o hover é do button */
      &:hover {
        background: ${shade(0.2, '#FF4933')};
      }
`;

export const ButtonEdit = styled.button`
      margin-top: 60%;
      margin-left: 20px;
      width: 150px;
      height: 50px;
      background: #3364FF;
      border-radius: 5px 5px 5px 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      /* Indicação de que o hover é do button */
      &:hover {
        background: ${shade(0.2, '#3364FF')};
      }
`;

export const Description = styled.form`
  flex: 1;
  strong + p {
    margin-top: 30px;
  }

  strong {
    margin-left: 60px;
    font-size: 20px;
    color: #3d3d4d;
  }

  p {
    margin-left: 60px;
    font-size: 18px;
    color: #a8a8b3;
    max-width: 800px;
    word-wrap: break-word;
  }
`;

export const Form = styled.form`
  margin-top: 70px;

  header {
    display: flex;
    align-items: center;
    flex: 1;
  }

  div {
      background: #F0F0F5;
      border-radius: 5px;
      width: 100%;
      max-height: 230px;
      padding: 24px;
      display: block;
      display: flex;
      align-items: center;
      transition:  0.2s;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
`;
