const Sequellize = require('sequelize');

require('dotenv').config();

// creates connection to database using host 127.0.0.1
const sequelize =process.env.JAWSDB_URL
? new Sequellize(process.env.JAWSDB_URL)
: new Sequellize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;