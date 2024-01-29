import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002'
});

export const postData = async (data) => {
  try {
    const response = await api.post('/entry', data);

    console.log('post', response);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
};

export const fetchData = async () => {
  try {
    const response = await api.get('/entry');

    return response;
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
};
