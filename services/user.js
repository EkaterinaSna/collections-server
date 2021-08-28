const User = require("../models/").user;

const UserService = {
  registration: (body) => {
    return User.findOne({where: {email : body.email}}).then(user => {
      if (user) {
        throw Error('Email should be uniq');
      } else {
        return User.create(body);
      }
    })
  },

  login: (email, password) => {
    console.log(email, password)
    return User.findOne({where: {email: email, password: password}});
  },

  findAll: () => {
    return User.findAll();
  },

  findOne: (id) => {
    return User.findOne({where: {id: id}});
  },

}


module.exports = UserService;