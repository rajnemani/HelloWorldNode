var http = require('http');



var status = "";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://ec2-54-69-153-27.us-west-2.compute.amazonaws.com:27017/exampleDb", function(err, db) {
        if(!err) {
            status+= "We are connected";
        }
        else {

            status+= "We are having issues." + err.message;
        }
    });


  res.end(status+'\n');
}).listen(5050);
console.log('Server running on port 5050');