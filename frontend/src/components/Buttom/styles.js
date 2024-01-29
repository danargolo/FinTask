import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ name }) => {
      switch (name) {
        case 'income':
          return css`
            background-color: green;
            color: white;
          `;
        case 'expense':
          return css`
            background-color: red;
            color: white;
          `;
        default:
          return css`
          `;
      }
    }}

    ${({ $active }) => {
      if ($active) {
        return css`
          filter: brightness(0.7);
        `;
      }
    }}

    &:disabled {
      background-color: gray;
      opacity: 0.7;
    }
`;
