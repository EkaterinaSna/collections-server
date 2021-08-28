const UserService = require("../services/user");
const bodyParser = require('body-parser');
const express = require("express");
const userRouter = express.Router();

userRouter.post("/registration", bodyParser.json(), (req, res) => {
  console.log(req.body)
  UserService.registration(req.body)
    .then(result => {
      res.sendStatus(result === 0 ? 404 : 200);
    }).catch(() => res.sendStatus(500));
});
userRouter.post("/login", (req, res) => {
  UserService.login(req.body.email, req.body.password)
    .then(result => {
      if (result) {
        res.send({...result.dataValues, password: null});
      } else {
        res.sendStatus(500);
      }
    }).catch(() => res.sendStatus(500));;
});
userRouter.get("/", (req, res) => {
  UserService.findAll().then(items => res.send(items));
});
userRouter.get("/:id",(req, res) => {
  console.log(req.params)
  console.log(req.params.id)
  UserService.findOne(req.params.id).then(user => res.send(user));
});

module.exports = userRouter;