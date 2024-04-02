import { useState } from 'react';
import * as S from './styles';

export const SignUpForm = () => {
  const [input, setInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    setInput(prevState => ({
      ...prevState,
      [target.id]: target.value
    }));
  };

  const handleChange2 = ({ target }) => {
    try {
      if (input.password !== target.value) {
        setIsDisabled(true);
        throw new Error('Senha precisa ser idêntica');
      } else {
        setIsDisabled(false);
        console.log('identico');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
          id='fullname'
          type='text'
          placeholder='Enter your Fullname'
          onChange={handleChange}
          required
        />
      <input
          id='email'
          type='text'
          placeholder='Enter your Email'
          onChange={handleChange}
          required
      />
      <label htmlFor='password'>
        <input
        id='password'
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter your Password'
        onChange={handleChange}
        required
      />
      <S.StyledEye
        onClick={ () => setShowPassword(!showPassword) }
        toggle={showPassword}
      /></label>
      <label htmlFor='repeatPassword'>
        <input
        id='repeatPassword'
        type={showPassword2 ? 'text' : 'password'}
        placeholder='Confirm your Password'
        onChange={handleChange2}
        required
      />
      <S.StyledEye
        onClick={ () => setShowPassword2(!showPassword2) }
        toggle={showPassword2}
      /></label>
      {/* {Error.message} */}
      <button type='submit' disabled={isDisabled}>Criar uma conta.</button>
    </S.Form>
  );
};
