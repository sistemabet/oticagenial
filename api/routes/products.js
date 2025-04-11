
const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Get all products
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    
    // Transforme os dados para corresponder à estrutura esperada pelo frontend
    const products = rows.map(row => ({
      id: row.id,
      name: row.title || '',
      price: parseFloat(row.price) || 0,
      description: row.description || '',
      brand: row.categoria || 'Sem marca',
      type: mapearCategoria(row.categoria),
      imageUrl: row.foto || 'https://via.placeholder.com/150',
      inStock: row.in_stock !== undefined ? row.in_stock : true,
      featured: Boolean(Math.random() > 0.8) // Aleatório para demonstração
    }));
    
    res.json(products);
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
    
    const row = rows[0];
    const product = {
      id: row.id,
      name: row.title || '',
      price: parseFloat(row.price) || 0,
      description: row.description || '',
      brand: row.categoria || 'Sem marca',
      type: mapearCategoria(row.categoria),
      imageUrl: row.foto || 'https://via.placeholder.com/150',
      inStock: row.in_stock !== undefined ? row.in_stock : true,
      featured: Boolean(Math.random() > 0.8) // Aleatório para demonstração
    };
    
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Get featured products
router.get('/featured/list', async (req, res) => {
  try {
    // Como não temos um campo 'featured', vamos selecionar alguns produtos aleatórios
    const [rows] = await db.query('SELECT * FROM products ORDER BY RAND() LIMIT 8');
    
    const products = rows.map(row => ({
      id: row.id,
      name: row.title || '',
      price: parseFloat(row.price) || 0,
      description: row.description || '',
      brand: row.categoria || 'Sem marca',
      type: mapearCategoria(row.categoria),
      imageUrl: row.foto || 'https://via.placeholder.com/150',
      inStock: row.in_stock !== undefined ? row.in_stock : true,
      featured: true
    }));
    
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos em destaque' });
  }
});

// Get products by type
router.get('/type/:type', async (req, res) => {
  try {
    const tipo = req.params.type;
    let categorias = [];
    
    // Mapear o tipo para categorias no banco de dados
    switch (tipo) {
      case 'solar':
        categorias = ['Sol', 'Óculos de Sol'];
        break;
      case 'grau':
        categorias = ['Grau', 'Óculos de Grau'];
        break;
      case 'infantil':
        categorias = ['Infantil', 'Óculos Infantil'];
        break;
      default:
        categorias = [];
    }
    
    let query = 'SELECT * FROM products';
    let params = [];
    
    if (categorias.length > 0) {
      const placeholders = categorias.map(() => '?').join(', ');
      query += ` WHERE categoria IN (${placeholders})`;
      params = categorias;
    }
    
    const [rows] = await db.query(query, params);
    
    const products = rows.map(row => ({
      id: row.id,
      name: row.title || '',
      price: parseFloat(row.price) || 0,
      description: row.description || '',
      brand: row.categoria || 'Sem marca',
      type: tipo,
      imageUrl: row.foto || 'https://via.placeholder.com/150',
      inStock: row.in_stock !== undefined ? row.in_stock : true,
      featured: Boolean(Math.random() > 0.8) // Aleatório para demonstração
    }));
    
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos por tipo' });
  }
});

// Get products by brand
router.get('/brand/:brand', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE categoria = ?', [req.params.brand]);
    
    const products = rows.map(row => ({
      id: row.id,
      name: row.title || '',
      price: parseFloat(row.price) || 0,
      description: row.description || '',
      brand: row.categoria || 'Sem marca',
      type: mapearCategoria(row.categoria),
      imageUrl: row.foto || 'https://via.placeholder.com/150',
      inStock: row.in_stock !== undefined ? row.in_stock : true,
      featured: Boolean(Math.random() > 0.8) // Aleatório para demonstração
    }));
    
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos por marca' });
  }
});

// Get all brands (categorias)
router.get('/brands/list', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT DISTINCT categoria FROM products WHERE categoria IS NOT NULL ORDER BY categoria');
    const brands = rows.map(row => row.categoria).filter(Boolean);
    res.json(brands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar marcas' });
  }
});

// Função auxiliar para mapear categorias para tipos
function mapearCategoria(categoria) {
  if (!categoria) return 'grau';
  
  const categoriaLower = categoria.toLowerCase();
  
  if (categoriaLower.includes('sol')) {
    return 'solar';
  } else if (categoriaLower.includes('infantil') || categoriaLower.includes('criança')) {
    return 'infantil';
  } else {
    return 'grau';
  }
}

module.exports = router;
