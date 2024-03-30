import { useState } from 'react';
import * as S from './styles';

export const LoginForm = () => {
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(prevState => ({
      ...prevState,
      [target.id]: target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <p>Olá novamente! Pronto para manter suas tarefas e finanças sob controle?</p>
      <label htmlFor='username'>Username</label>
      <input
          id='username'
          type='text'
          placeholder='Your Username'
          // value={username}
          autoComplete='username'
          onChange={handleChange}
          required
        />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Your Password'
        // value={password}
        autoComplete='current-password'
        onChange={handleChange}
        required
      />
      <button type='submit'>Login</button>
    </S.Form>
  );
};
