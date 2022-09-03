//
const { db, DataTypes } = require("./../utils/database.utils");

/** employee model */
const Employee = db.define("registrations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "working",
  },
});

module.exports = { Employee };
