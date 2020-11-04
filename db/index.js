const Pool = require("pg").Pool;

const cn =
  "postgres://mzhtidpzhekzgv:0d2d621c83e1736a61ec12395684097b452a29fb31a9afd154402ee083a10028@ec2-23-20-70-32.compute-1.amazonaws.com:5432/d8460q7isklitc";

const pool = new Pool({
  connectionString: cn,
});

module.exports = {
  MAILGUN_CONFIG: {
    DOMAIN_NAME: process.env.MAILGUN_DOMAIN_NAME,
    API_KEY: process.env.MAILGUN_API_KEY,
  },
  query: (text, params) => pool.query(text, params),
};
