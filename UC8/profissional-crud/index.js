const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev')); // Loga no terminal

require('dotenv').config();

const profissionalRoutes = require('./routes/profissionalRoutes');
const celularRoutes = require('./routes/celularRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json());
app.use('/profissionais', profissionalRoutes);
app.use('/celulares', celularRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});