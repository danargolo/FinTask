export const formatCurrency = (value) => {
  const numericValue = value.replace(/[^0-9]/g, '');

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(parseInt(numericValue) / 100);

  return formattedValue;
};
