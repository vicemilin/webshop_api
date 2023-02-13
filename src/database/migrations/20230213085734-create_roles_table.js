'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'role',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }
      },
      {
        Sequelize,
        modelName: 'Role',
        tableName: 'role',
        underscored: true
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('role');
  }
};
