const Sequelize = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'postgres'
//   }
// );
let sequelize;

if (process.env.DB_RUL) {
  sequelize = new Sequelize(process.env.DB_RUL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

module.exports = sequelize;
