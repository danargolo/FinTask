import styled from 'styled-components';
import { Intro } from '../../components/ui/Login/intro';

export const Login = styled.section`
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
`;

export const Background = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors1.primary300};
`;

export const StyledSVG = styled(Intro)`
  /* border: 2px solid red; */
  width: 600px;
  height: 409.81px;
`;

export const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors1.text100};
  /* border: 2px solid red; */
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  gap: 2rem;
  /* border: 2px solid red; */
`;
export const TextsContainer = styled.div`
  gap: 2rem;
  /* border: 2px solid red; */
`;

export const Tittle = styled.h1`
  
  font-size: 32px;
`;
export const Description = styled.p`
  margin: 0;
  font-size: 24px;
`;
