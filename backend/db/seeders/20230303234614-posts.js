'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'My first post',
        coffee: 1,
        text: 'This is my first post about coffee.',
        rating: 4.5,
      },
      {
        title: 'The best coffee ever',
        coffee: 2,
        text: 'I just had the best coffee ever at this little coffee shop!',
        rating: 5.0,
      },
      {
        title: 'Coffee recipes',
        coffee: 3,
        text: 'Here are some of my favorite coffee recipes to try at home.',
        rating: 4.0,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', {
      title: ['My first post', 'The best coffee ever', 'Coffee recipes']
    })
  }
};
