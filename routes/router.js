var express = require('express');
var router = express.Router();

router.get('/about',function(req,res){
  res.render('about',{view:"general"});
});

router.get('/contact',function(req,res){
  res.render('contact',{view:"general"});
});

router.get('/index',function(req,res){
  res.render('index',{view:"general"});
});

router.get('/',function(req,res){
  res.render('index',{view:"general"});
});

// this is activated when user clicks on login/signup 
router.get('/savedConnections',function(req,res){
  res.render('savedConnections',{view:"user"});
});

//this is activated when user clicks on yes/no/maybe button in connection view
router.post('/savedConnections',function(req,res){
  res.render('savedConnections',{view:"user"});
});

router.get('/newConnection',function(req,res){
  res.render('newConnection',{view:"user"});
});

module.exports = router;
