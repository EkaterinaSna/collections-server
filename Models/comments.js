module.exports = (sequelize, Sequelize) => {
  return  sequelize.define("comments", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    itemId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
}