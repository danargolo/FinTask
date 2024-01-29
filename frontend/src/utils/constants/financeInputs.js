export const receita = {
  input: [
    {
      type: 'text',
      placeholder: 'Descrição',
      name: 'description'
    },
    {
      type: 'text',
      placeholder: 'Valor',
      name: 'value'
    }
  ],
  select: {
    cat: 'categories',
    name: 'cat',
    options: [
      'Salário', 'Freelancer', 'Venda de Produto', 'Aposta', 'Outros'
    ]
  }
};
export const despesa = {
  input: [
    {
      type: 'text',
      placeholder: 'Descrição',
      name: 'description'
    },
    {
      type: 'text',
      placeholder: 'Valor',
      name: 'value'
    }
  ],
  select: {
    cat: 'categories',
    name: 'cat',
    options: [
      'Alimentação', 'Moradia', 'Lazer', 'Saúde', 'Outros'
    ]
  }
};
