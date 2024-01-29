import * as Styled from './styles';

export const Button = ({ text, ...rest }) => {
  return <Styled.Button {...rest}>{text}</Styled.Button>;
};
