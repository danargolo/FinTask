import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: 85vh;
  background-color: #d4eaf7;
`;

export const Aside = styled.aside`
  width: 15%;
  margin: 0 5.75rem 0 4.0rem ;
  align-self: center;
  text-align: -webkit-center;
  background-color: #f5f4f1;
  border-radius: .375rem;
  box-shadow: .125rem .125rem .20rem .20rem gray;

`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  margin: 1rem 0;
  

  & Button {
    height: 3rem;
    border-radius: .375rem;

    ${({ name }) => {
      if (name === 'income') {
        return css`*/
          background-color: blue; 
          `;
      }
    }
} 
  }
`;
