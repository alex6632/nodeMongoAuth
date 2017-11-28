// Configuration du module
let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/authentification';

router.post('/signup', (req, res) => {
  let data = req.body;
  if(!data.name){ res.status(400); res.json({ "error": "Bad Data" });
  } else {
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

router.post('/',
  passport.authenticate('local', { successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true })
);

module.exports = router;