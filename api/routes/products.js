
const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Get all products
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Get featured products
router.get('/featured/list', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE featured = true');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos em destaque' });
  }
});

// Get products by type
router.get('/type/:type', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE type = ?', [req.params.type]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos por tipo' });
  }
});

// Get products by brand
router.get('/brand/:brand', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE brand = ?', [req.params.brand]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos por marca' });
  }
});

// Get all brands
router.get('/brands/list', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT DISTINCT brand FROM products ORDER BY brand');
    const brands = rows.map(row => row.brand);
    res.json(brands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar marcas' });
  }
});

module.exports = router;
