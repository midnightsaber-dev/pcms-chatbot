const Pool = require("pg").Pool;

const cn = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: cn,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
