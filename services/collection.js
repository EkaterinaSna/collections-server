const Collection = require("../models/").collection;

const CollectionService = {

  findAll: () => {
    return Collection.findAll();
  },
  findOne: (id) => {
    return Collection.findOne({where: {id: id}});
  },
  create: (body) => {
    return Collection.create(body)
  },
  destroy: (id) => {
    return Collection.destroy({where: {id: id}});
  },
  edit: (id, item) => {
    return Collection.update(item, {where: {id: id}});
  }
}


module.exports = CollectionService;