'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      { description: 'sticker', url: '/pics/users/sticker1.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker2.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker3.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker4.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker5.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker6.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker7.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker8.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker9.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker10.png', userId: 1, },
      { description: 'sticker', url: '/pics/users/sticker11.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker12.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker13.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker14.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker15.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker16.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker17.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker18.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker19.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker20.png', userId: 2, },
      { description: 'sticker', url: '/pics/users/sticker21.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker22.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker23.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker24.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker25.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker26.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker27.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker28.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker29.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker30.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker31.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker32.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker33.png', userId: 3, },
      { description: 'sticker', url: '/pics/users/sticker34.png', userId: 3, },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};

