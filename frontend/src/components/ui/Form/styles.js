'use client';

import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & input, select {
    height: 2rem;
    margin: 0.6rem 0.5rem;
    border-radius: .375rem;
  }

  & Button {
    width: 90%;
    height: 3rem;
    align-self: center;
    border-radius: .375rem;
    margin: 0.75rem 0;
  }

`;
