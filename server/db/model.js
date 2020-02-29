const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    "postgres://duvrexxn:mrCIwRY3AyoXjiLeBCPd1nwaujBCgMxH@isilo.db.elephantsql.com:5432/duvrexxn"
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  }
};
