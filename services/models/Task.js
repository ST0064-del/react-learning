const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Task = sequelize.define(
  "Task",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Task;
