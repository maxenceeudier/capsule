var express = require('express');
var router = express.Router();
var grilleModel = require('../modules/grille')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dataSave',async function(req, res, next) {

  
  var data = new grilleModel({
  value: JSON.parse(req.body.values)
  });

  await grilleModel.deleteMany({__v:0});
    
  var dataSave = await data.save();

  console.log(dataSave);

  res.json(true)
});

router.get('/loadLastPartie',async function (req, res, next){

  var lastPartie = await grilleModel.find();
  console.log(lastPartie)
  lastPartie = lastPartie[0].value;
  console.log(lastPartie);

  res.json({lastPartie});
})

module.exports = router;
