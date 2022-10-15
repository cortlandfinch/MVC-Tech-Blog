const { Post } = require('../models');

const postData = [
    // add seeds
    {
        
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;