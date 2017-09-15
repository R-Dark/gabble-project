'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn(
      "posts",
      "title", {
        type: Sequelize.STRING
      }
    )
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeColumn(
      "posts",
      "title",
    )
  }
};
