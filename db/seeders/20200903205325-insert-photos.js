'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      { description: 'sticker', url: '/public/users/sticker1', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker2', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker3', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker4', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker5', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker6', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker7', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker8', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker9', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker10', userId: 1, },
      { description: 'sticker', url: '/public/users/sticker11', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker12', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker13', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker14', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker15', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker16', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker17', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker18', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker19', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker20', userId: 2, },
      { description: 'sticker', url: '/public/users/sticker21', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker22', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker23', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker24', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker25', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker26', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker27', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker28', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker29', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker30', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker31', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker32', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker33', userId: 3, },
      { description: 'sticker', url: '/public/users/sticker34', userId: 3, },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
