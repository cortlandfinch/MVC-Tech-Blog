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
    },
    {
        username: "dan",
        email: "dan@email.com",
        password: "password123"
    },
    {
        username: "sylvia",
        email: "sylvia@email.com",
        password: "password123"
    },
    {
        username: "clyde",
        email: "clyde@email.com",
        password: "password123"
    },
    {
        username: "bonnie",
        email: "bonnie@email.com",
        password: "password123"
    },
    {
        username: "tyson",
        email: "tyson@email.com",
        password: "password123"
    },
    {
        username: "george",
        email: "george@email.com",
        password: "password123"
    },
    {
        username: "lucy",
        email: "lucy@email.com",
        password: "password123"
    },
];

const userSeeds = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeeds;