module.exports = (sequelize, Sequelize) => {
  return  sequelize.define("collection", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    aboutCollection: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    img: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
}