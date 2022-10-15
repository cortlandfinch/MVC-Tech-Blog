const { Comment } = require('../models');

const commentData = [
    // add seeds
    {
        comment_text: 'This is my first comment!.',
        user_id: 3,
        post_id: 1
      },
      {
        comment_text: 'Im pretty excited about this!',
        user_id: 2,
        post_id: 3
      },
      {
        comment_text: 'I hope this works.',
        user_id: 1,
        post_id: 2
      },
      {
        comment_text: 'Wooooooooooo.',
        user_id: 3,
        post_id: 5
      },
      {
        comment_text: 'Pretty neat.',
        user_id: 4,
        post_id: 5
      },
      {
        comment_text: 'Excellent.',
        user_id: 1,
        post_id: 1
      },
      {
        comment_text: 'Good start, keep going.',
        user_id: 6,
        post_id: 7
      },
      {
        comment_text: 'Keep it up!',
        user_id: 4,
        post_id: 4
      },
      {
        comment_text: 'Awesome.',
        user_id: 1,
        post_id: 4
      },
      {
        comment_text: 'Cool!',
        user_id: 3,
        post_id: 4
      }
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;

