import { Form } from '../../components/Form';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Buttom';
import { useFinanceContext } from '../../context/finance';

import * as Styled from './styles';
import * as constant from '../../utils/constants/financeInputs';
import { fetchData, postData } from '../../services/api';
import { Dash } from '../../components/Dash';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export default function Finance () {
  const [input, setInput] = useState(constant.receita);
  const [response, setResponse] = useState([]);
  const [activeButton, setActiveButton] = useState('income');
  const { value, setValue, disabled } = useFinanceContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleResponse();
        setResponse(data);
      } catch (error) {
        console.error('Erro ao lidar com a resposta:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (data, e) => {
    setInput(data);
    setValue({
      transaction: e.target.name,
      description: '',
      value: '',
      categories: data.select.options[0]
    });
    setActiveButton(e.target.name);
  };

  const handleResponse = async () => {
    const response = await fetchData();
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(value);
      setValue({
        transaction: 'income',
        description: '',
        value: '',
        categories: 'Salário'
      });
      setResponse(await handleResponse());
    } catch (error) {
      console.error('Erro ao lidar com a resposta:', error);
    }
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.Aside>
          <Styled.ButtonContainer>
            <Button
              name="income"
              onClick={(e) => handleClick(constant.receita, e)}
              text="Receita"
              $active={activeButton === 'income'}
            />
            <Button
              name="expense"
              onClick={(e) => handleClick(constant.despesa, e)}
              text="Despesa"
              $active={activeButton === 'expense'}
            />
          </Styled.ButtonContainer>
          <Form data={input}>
            <Button
              text="Adicionar"
              name="Submit"
              type="buttom"
              onClick={(e) => handleSubmit(e)}
              disabled={disabled}
            />
          </Form>
        </Styled.Aside>
        <Dash data={response}/>
      </Styled.Wrapper>
      <Footer />
    </>
  );
}
