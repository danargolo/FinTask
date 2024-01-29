import { useEffect } from 'react';
import * as Styled from './styles';

export const Dash = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <Styled.Section>
      <Styled.Tittle >
        <Styled.Description>Descrição</Styled.Description>
        <Styled.Value>Valor</Styled.Value>
        <Styled.Categories>Categoria</Styled.Categories>
      </Styled.Tittle>
      <Styled.UlContainer>
        <Styled.Ul>
          {
            data.map((d, index) => (
              <Styled.Li key={index}>
                <Styled.Description>{d.description}</Styled.Description>
                <Styled.Value>{d.value}</Styled.Value>
                <Styled.Categories>{d.categories}</Styled.Categories>
                {/* <span>{d.transaction}</span> */}
              </Styled.Li>
            ))
          }
        </Styled.Ul>
      </Styled.UlContainer>
    </Styled.Section>
  );
};
