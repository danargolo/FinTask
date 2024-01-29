const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://db/fintask');
    console.log('Conectado ao MongoDB');

  } catch (error) {
    console.error('Erro de conexão ao MongoDB:', error);
  }
};

module.exports = connectDB;