'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull:false
        },
         nome: {
          type: Sequelize.STRING(200),
          allowNull: false
         },
         email: {
          type: Sequelize.STRING(200),
          allowNull: false
         },
         senha: {
          type: Sequelize.STRING(10),
          allowNull: false
         },
         url_foto: {
          type: Sequelize.STRING(200),
          allowNull: false
         },
         created_at: {
          type: Sequelize.DATE,
          allowNull: false
         },
         updated_at: {
          type: Sequelize.DATE,
          allowNull: false
         }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
