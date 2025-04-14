
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);

// Test route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API server is running' });
});

// Em produção, servir os arquivos estáticos do build
if (process.env.NODE_ENV === 'production') {
  // Servir os arquivos estáticos da pasta dist
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Para qualquer rota que não seja /api, servir o index.html
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    }
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API acessível em http://localhost:${PORT}/api/health`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
