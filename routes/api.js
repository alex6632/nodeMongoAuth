// Configuration du module
let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/authentification';

router.post('/user/signup', (req, res) => {
  let data = req.body;
  console.log(data);
  if(!data.name){ res.status(400); res.json({ "error": "Bad Data" });
  } else {
    data.isDone = false;
    MongoClient.connect(mongodbUrl, (err, db) =>{
      if(err){ res.send(err); db.close(); }
      else{
        db.collection('user').insert([data], (err, data) => {
          if(err){  res.send(err); }
          else{
            res.send(data);
            db.close();
          }
        })
      }
    })
  }

});

router.get('/user/profile', (req, res, next) => {
  MongoClient.connect(mongodbUrl, (err, db) =>{
    if(err){ res.send(err) }
    else {
      db.collection('list').find().toArray((err, tasks) => {
        if(err){ res.send(err) }
        else{
          res.json(tasks)
        }
      })
    }
    db.close();
  })
});

// Export du module
module.exports = router;