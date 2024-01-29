import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: #00668c;

  & p {
    margin-right: 2.5rem;
  }

  & div {
    display: flex;
    width: 4rem;
    justify-content: space-between;
  }
`;
