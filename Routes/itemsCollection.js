const ItemsCollectionService = require("../services/itemsCollection");
const bodyParser = require('body-parser');
const express = require("express");
const itemsCollectionRouter = express.Router();

itemsCollectionRouter.get("/:collectionId/list", (req, res) => {
  ItemsCollectionService.findAll(req.params.collectionId).then(items => res.send(items));
});

itemsCollectionRouter.get("/likes/:itemId", (req, res) => {
  ItemsCollectionService.likes(req.params.itemId).then(likes => res.send(likes));
})

itemsCollectionRouter.get("/:id",(req, res) => {
  ItemsCollectionService.findOne(req.params.id).then(collectionItem => res.send(collectionItem));
});

itemsCollectionRouter.post("/add", bodyParser.json(), (req, res) => {
  ItemsCollectionService.add(req.body)
    .then(result => {
      if (result) {
        res.send({...result.dataValues});
      } else {
        res.status(500);
      }
    });
});

itemsCollectionRouter.post("/like", (req, res) => {
  ItemsCollectionService.like(req.body.itemId, req.body.userId)
    .then(result => {
      res.sendStatus(result === 0 ? 404 : 204);
    })

})

itemsCollectionRouter.delete("/delete/:id", (req, res) => {
  ItemsCollectionService.destroy(req.params.id)
    .then(result => {
      res.sendStatus(result === 0 ? 404 : 204);
    });
});

itemsCollectionRouter.put("/editItems/:id", (req, res) => {
  ItemsCollectionService.editItems(req.params.id, req.body)
    .then(result => {
      if (result) {
        res.send({...result.dataValues});
      } else {
        res.status(500);
      }
    });
});

module.exports = itemsCollectionRouter;