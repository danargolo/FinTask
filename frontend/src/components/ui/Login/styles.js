'use client';

import styled from 'styled-components';

export const LoginForm = styled.article`
  display: flex;
  flex-direction: column;
  /* width: 45%; */
  height: 20rem;
  padding: 20px;
  align-items: flex-start;
  justify-content: center;
`;

export const Legend = styled.legend`
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 45%; */
  /* height: 20rem; */
  /* padding: 20px; */
  align-items: start;
  justify-content: center;
  gap: 0.4rem;

  p {
    margin-bottom: 1.5rem;
  }

  input {
    width: 20rem;
    height: 50px;
    margin-bottom: 32px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input::placeholder {
    color: #999;
    transition: color 0.3s ease-in-out;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s ease-in-out
  }

  button {
    display: flex;
    width: 30%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

`;
