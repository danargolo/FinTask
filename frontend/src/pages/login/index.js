// import { useState } from 'react';
import { LoginForm } from '../../components/ui/Login';
import * as S from './styles';

export default function Login () {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleInput = (e) => {
  // //   setInput(e.target.value);
  // // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Email:', username, 'Password:', password);
  // };

  return (
    <S.Login>
      <S.Background>
        <S.StyledSVG />
      </S.Background>
      <S.LoginWrapper>
        <S.Container>
          <S.TextsContainer>
            <S.Tittle>FinTask Manager</S.Tittle>
            <S.Description>Finanças e tarefas organizadas em um só lugar.</S.Description>
          </S.TextsContainer>
          <LoginForm />
          <p>
            Ainda não tem uma conta? <a href='/criar-conta'>Crie uma agora</a>.
          </p>
        </S.Container>
      </S.LoginWrapper>
    </S.Login>
  );
}
