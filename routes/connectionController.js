var express = require('express');
var controller = express.Router();
var reqID;
var connectionDB = require('../utility/connectionDB.js');

controller.get('/connections',function(req,res){
  res.render('connections', {view:"general", data: connectionDB.getConnections(), dataTopic: connectionDB.getTopicList()});
});

//if the connectionID in the query string is vaild it displays the requested page.
//if no query string is passed i.e. if connectionID is undefined or when connectionID is invalid connections view is shown (list of all connections)
controller.get('/connection', function(req,res){
  reqID = req.query.connectionID;
  if (reqID === undefined) {
    console.log("query string is undefined");
    res.render('connections', {view:"general", data: connectionDB.getConnections(), dataTopic: connectionDB.getTopicList()});
  }
  else if (connectionDB.validate(reqID) === true){
    console.log("Valid!!!!");
    res.render('connection',{view:"general", details:connectionDB.getConnection(reqID)[0]});
  }
  else {
    console.log("query string is not valid");
    res.render('connections', {view:"general", data: connectionDB.getConnections(), dataTopic: connectionDB.getTopicList()});
  }
});

// this is activated when user clicks on update button in savedConnections view
controller.post('/connection',function(req,res){
  res.render('connection',{view:"general", details:connectionDB.getConnection(reqID)[0]});
});

module.exports = controller;
