var http = require('http');



var status = "";
var address = process.env.MONGODB_PORT_27017_TCP_ADDR;
var port = process.env.MONGODB_PORT_27017_TCP_PORT;
status+= "Address: " + address + " Port: " + port;
var connection = "mongodb://" + address + ":" + port + "/exampleDb"
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect(connection, function(err, db) {
        if(!err) {
            status+= "We are connected";
            db.createCollection('usercollection', function(err, collection) {});
            var collection = db.collection('usercollection');
            collection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" }, function(err,result) {});
        }
        else {

            status+= "We are having issues." + err.message;
        }
    });


  res.end(status+'\n');
}).listen(5050);
console.log('Server running on port 5050');