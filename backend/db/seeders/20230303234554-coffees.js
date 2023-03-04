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
    await queryInterface.bulkInsert('Coffees', [
      {
        name: 'Colombian Supremo',
        year: 2022,
        caffeineContent: 150,
        caffeinePercentage: 0.01
      },
      {
        name: 'Ethiopian Yirgacheffe',
        year: 2021,
        caffeineContent: 120,
        caffeinePercentage: 0.008
      },
      {
        name: 'Costa Rican Tarrazu',
        year: 2022,
        caffeineContent: 135,
        caffeinePercentage: 0.009
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
    await queryInterface.bulkDelete('Coffees', {
      name: ['Colombian Supremo', 'Ethiopian Yirgacheffe', 'Costa Rican Tarrazu']
    })
  }
};
