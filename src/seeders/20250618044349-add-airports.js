'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name :"Kempegowda Intl Airport",
      cityId:9,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name :"Jay Prakash Narayan Intl Airport",
      cityId:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name :"Mysore Airport",
      cityId:10,
      createdAt:new Date(),
      updatedAt:new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
