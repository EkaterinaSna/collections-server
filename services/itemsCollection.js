const ItemsCollection = require("../models/").itemsCollection;
const Like = require("../models/").like;


const ItemsCollectionService = {

  findAll: (id) => {
    return ItemsCollection.findAll({where: {collectionId: id}});
  },
  findOne: (id) => {
    return ItemsCollection.findOne({where: {id: id}});
  },
  add: (body) => {
    return ItemsCollection.create(body)
  },
  destroy: (id) => {
    return ItemsCollection.destroy({where: {id: id}});
  },
  editItems: (id, item) => {
    return ItemsCollection.update(item, {where: {id: id}})
  },
  like: (itemId, userId) => {
    return Like.findOne({where: {itemId: itemId, userId: userId}}).then(like => {
      if (like && like.dataValues) {
        return  Like.destroy({where: {itemId: itemId, userId: userId}});
        console.log(like)
      } else {
        return Like.create({itemId, userId});
      }
    })
  },
  likes: (itemId) => {
    return Like.findAll({where: {itemId: itemId}})
  },
}


module.exports = ItemsCollectionService;