const Sequelize = require("sequelize");
const db = require("../db");

const Read = db.define("read", {
  lastReadIndex: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Read;
