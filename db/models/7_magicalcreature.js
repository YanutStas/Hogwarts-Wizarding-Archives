"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class magicalCreature extends Model {
    static associate(models) {
      this.belongsTo(models.event, { foreignKey: "event_id" });
    }
  }
  magicalCreature.init(
    {
      type: DataTypes.STRING,
      peculiarities: DataTypes.STRING,
      habitats: DataTypes.STRING,
      event_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "magicalCreature",
    }
  );
  return magicalCreature;
};
