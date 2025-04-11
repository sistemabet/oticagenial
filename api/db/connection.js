
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
