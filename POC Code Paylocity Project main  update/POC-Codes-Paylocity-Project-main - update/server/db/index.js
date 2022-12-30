const { Pool } = require("pg");
const pool = new Pool({
  connectionString: `postgresql://pocc_user:pocc_pass@localhost:5432/paylocity`,
    ssl: false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

