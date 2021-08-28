const Comments = require("../models/").comments;

const CommentsService = {
  create: (body) => {
    return Comments.create(body)
  },
  findAll: (id) => {
    return Comments.findAll({where: {itemId: id}});
  },
  destroy: (id) => {
    return Comments.destroy({where: {id: id}});
  },
}

module.exports = CommentsService;