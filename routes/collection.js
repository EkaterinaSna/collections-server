const CollectionService = require("../services/collection");
const bodyParser = require('body-parser');
const express = require("express");
const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
  CollectionService.findAll().then(items => res.send(items));
});

collectionRouter.get("/:id",(req, res) => {
  CollectionService.findOne(req.params.id).then(collection => res.send(collection));
});

collectionRouter.post("/create", bodyParser.json(), (req, res) => {
  CollectionService.create(req.body)
    .then(result => {
      res.sendStatus(result ? 204 : 204);
    });
});

collectionRouter.put("/edit/:id", (req, res) => {
  CollectionService.edit(req.params.id, req.body)
    .then(result => {
      if (result) {
        res.send({...result.dataValues});
      } else {
        res.status(500);
      }
    });
});

collectionRouter.delete("/delete/:id", (req, res) => {
  CollectionService.destroy(req.params.id)
    .then(result => {
      res.sendStatus(result === 0 ? 404 : 204);
    });
});

module.exports = collectionRouter;