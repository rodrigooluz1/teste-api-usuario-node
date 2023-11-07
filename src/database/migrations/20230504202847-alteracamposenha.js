'use strict';

const { tableName } = require('../../models/User');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.changeColumn('users', 'senha', {      
        type: Sequelize.STRING(200),
        allowNull: false
    })    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'senha', {      
      type: Sequelize.STRING(10),
      allowNull: false
    })    
  }
};
