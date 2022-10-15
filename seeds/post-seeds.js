const { Post } = require('../models');

const postData = [
    // add seeds
    {
        title: 'New Tech News.',
        post_data: 'Something new is coming!',
        user_id: 10
      },
      {
        title: 'Old News.',
        post_data: 'You wont want to miss out.',
        user_id: 2
      },
      {
        title: 'Programming',
        post_data: 'How to become a programmer',
        user_id: 4
      },
      {
        title: 'Javascript',
        post_data: 'Coding can be fun!',
        user_id: 5
      },
      {
        title: 'CSS',
        post_data: 'Lets make this look pretty!',
        user_id: 7
      },
      {
        title: 'HTML.',
        post_data: 'The backbone of the webpage!',
        user_id: 1
      },
      {
        title: 'REACT.',
        post_data: 'Lets make something new!',
        user_id: 9
      },
      {
        title: 'CODING',
        post_data: 'DO NOT MISS OUT!',
        user_id: 3
      },
      {
        title: 'DATABASES.',
        post_data: 'Time to learn about MySQL!',
        user_id: 6
      },
      {
        title: 'Modern Web Design',
        post_data: 'Woot Woot!',
        user_id: 8
      },
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;