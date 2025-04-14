
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

// Test route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API server is running' });
});

// API Routes
app.use('/api/products', productRoutes);

// In production, serve static files from the build
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the dist folder
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // For any route not starting with /api, serve index.html
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    } else {
      // For API routes that weren't caught by the earlier handlers, return 404
      res.status(404).json({ error: 'API endpoint not found' });
    }
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API acessível em http://localhost:${PORT}/api/health`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
