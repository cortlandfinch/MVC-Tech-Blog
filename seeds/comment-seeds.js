const { Comment } = require('../models');

const commentData = [
    // add seeds
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;

