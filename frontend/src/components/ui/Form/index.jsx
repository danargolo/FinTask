import * as Styled from './styles';
import { useFinanceContext } from '../../../context';
import { useEffect } from 'react';
import { formatCurrency } from '../../../utils/mask/currencyFormater';

export const Form = ({ data: { input, select }, children, ...rest }) => {
  const { value, setValue, setDisabled } = useFinanceContext();

  useEffect(() => {
    setDisabled(value.description.length === 0 || value.value.length === 0);
  }, [value.description, value.value]);

  const handleChange = ({ target }) => {
    let formattedValue = target.value;

    if (target.name === 'value') {
      formattedValue = target.value.replace(/\D/g, '');
      formattedValue = formatCurrency(target.value);
    }

    setValue(prevState => ({
      ...prevState,
      [target.name]: formattedValue
    }));
  };

  return (
    <Styled.Form {...rest}>
        {input
          ? (
          <>
            {input.map((properties, index) => (
              <input
                key={index}
                {...properties}
                onChange={handleChange}
                value={value[properties.name] || ''}
                required
              />
            ))}
            {select
              ? (
              <select name={select.cat} onChange={handleChange} value={value.categories}>
                {select.options.map((m, index) => (
                  <option value={m} key={index}>
                    {m}
                  </option>
                ))}
              </select>
                )
              : null}
          </>
            )
          : null}
      {children}
    </Styled.Form>
  );
};
