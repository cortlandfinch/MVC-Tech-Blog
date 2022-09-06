const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    // add seeds
];

const userSeeds = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeeds;