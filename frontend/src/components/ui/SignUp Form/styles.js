'use client';

import styled from 'styled-components';
import { Eye } from './eye';

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

  label {
    width: 20rem
  }

  input {
    width: 95%;
    max-width: 15rem;
    height: 50px;
    margin-bottom: 1rem;
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
    min-width: 6rem;
    width: 30%;
    max-width: 15rem;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;

export const StyledEye = styled(Eye)`
  position: relative;
  top: 50%;
  right: 50px;
  transform: translateY(32%);
  cursor: pointer;
  
  line {
    transition: opacity 0.3s ease;
  }
  

  ${({ toggle }) =>
    toggle &&
      `
        line {
          opacity: 0
        }

      `
  }
  
`;
