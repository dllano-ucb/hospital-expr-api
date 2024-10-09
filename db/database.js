// db/database.js
import pg from 'pg';
const Pool = pg.Pool;

const pool = new Pool({
  user: 'postgres', // Use the correct user if different
  host: 'localhost', 
  database: 'hospital', 
  password: '', // If you have a password
  port: 5432, // The default PostgreSQL port
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // Or handle the error appropriately
});
console.log("database module loaded");
export default pool;
