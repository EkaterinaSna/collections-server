module.exports = (sequelize, Sequelize) => {
  return  sequelize.define("itemsCollection", {
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
    aboutItem: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    img: {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    },
    collectionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  });
}