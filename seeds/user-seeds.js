const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    // add seeds
    {
        username: "andre",
        email: "andre@email.com",
        password: "password123"
    },
    {
        username: "charles",
        email: "charles@email.com",
        password: "password123"
    },
    {
        username: "mike",
        email: "mike@email.com",
        password: "password123"
    }
];

const userSeeds = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeeds;