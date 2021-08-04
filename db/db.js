const { Pool } = require('pg')
const pool = new Pool({

    user: 'api',
    host: 'localhost',
    database: 'postgres',
    password: 'secret',
    port: 5432,
  }

)
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}