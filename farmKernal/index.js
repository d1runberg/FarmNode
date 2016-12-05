var five = require('johnny-five');
//var edison = require('edison-io');
var express = require('express');

var fileSys = require('fs');
var path = require('path');

var app = express();

var board = new five.Board({
  //io: new edison()
  port:"/dev/ttyMFD1"
});

var date = new Date();

var logHeader = 'timeStamp,temperature,humidity,latitude,longitude'+'\n'
var file = 'log'+date.now()+'.csv';

fileSys.appendFile(file, logHeader, function(error){
  if (error){
    console.log('error setting up CSV file!');
  }
});

board.on('ready', function(){
  var temp, humidity, atmos, lat, lon, time;
  var sensor = new five.Multi({
    controller: 'BME280',
    freq: 10*1000
  });

  var gps = new five.GPS([10,11]);

  gps.on('message', function(){
    time = gps.time;
    lat = gps.latitude;
    lon = gps.longitude;
  });

  sensor.on('data', function(){
    temp = sensor.thermometer.F;
    humidity = sensor.hygrometer.relativeHumidity;
    atmos = sensor.barometer.pressure;

    var logString = time + ',' + temp + ',' + humidity + ',' + atmos + ',' + lat + ',' + lon + '\n';
    filSys.appendFile(file,logString, function(){
      console.log('data logged!');
    });
  });
});

app.get('/', function(req,res){
   //set dashboard
});

app.get('/download', function(req,res){
   //res.sendFile(); ???
   res.download(path.join(__dirname + '/'+file));
});

app.get('/clear', function(req,res){
   fileSys.unlink(path.join(__dirname, '/'+file));
   res.end(file + ' deleted!');

   fileSys.appendFile(file, logHeader, function(error){
     console.log('New file created!');
     if (error){
       console.log('error setting up CSV file!');
     }
   });
});

app.get('/view', function(req,res){
  res.sendFile(path.join(__dirname, '/'+ file));
});

app.get('/logs', function(){
  fileSys.readdir(path.join(__dirname+'/data'), function(err,files){
    res.send(files);
    res.end();
  });
});

app.get('/log/:log' {
  
});
