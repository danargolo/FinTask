const express = require('express');
const connectDB = require('./models/connection');
const { entryRouter } = require('./routers');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

connectDB();
app.use('/entry', entryRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});