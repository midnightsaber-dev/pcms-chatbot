const pgp = require("pg-promise")();
const cn = {
  connectionString:
    "postgres://mzhtidpzhekzgv:0d2d621c83e1736a61ec12395684097b452a29fb31a9afd154402ee083a10028@ec2-23-20-70-32.compute-1.amazonaws.com:5432/d8460q7isklitc",
  max: 30,
};

// Creating a new database instance from the connection details:
const db = pgp(cn);

module.exports = {
  MAILGUN_CONFIG: {
    DOMAIN_NAME: process.env.MAILGUN_DOMAIN_NAME,
    API_KEY: process.env.MAILGUN_API_KEY,
  },
  DATABASE: db,
};
