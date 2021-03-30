var express = require('express');
const router = express.Router();
var db = require('../datastore/datastore.js');
var moment = require('moment');

router.get('/',  (req, res) => {
  res.send({title:"server is working!"});
});
/*
router.get('/posts',  (req, res) => {
  //var data = db.get('posts').value();
  res.status(200).json(data);
});

router.post('/posts', (req, res) => {
  var newPost = {
    text: req.body.text,
    id: new Date().getTime(),
    date: moment().format('MMM Do, HH:mm')
  };

  if (req.body.text) {
    db.get('posts').push(newPost).write();
    res.send(newPost);
  } else {
    res.status(400).send(newPost);
  }
});

router.delete('/posts/:id', (req, res) => {
  var deleteResult = db.get('posts').remove({ id: parseInt(req.params.id, 10) }).write();
  if (deleteResult.length) {
    res.status(200).send(deleteResult);
  } else {
    res.status(400).send(deleteResult);
  }
});*/

module.exports = router;