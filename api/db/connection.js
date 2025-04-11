
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

// Create connection pool
const pool = mysql.createPool({
  host: '67.23.238.77',
  user: 'oticagenial',
  password: '5u7zA@v50',
  database: 'oticagenial',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release();
    return true;
  } catch (err) {
    console.error('Database connection failed:', err);
    return false;
  }
}

testConnection();

module.exports = pool;

