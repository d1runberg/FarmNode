var five = require('johnny-five');
// Edison Arduino block is used...not edison-io!


var board = new five.Board({
  //io: new edison()
  port:"/dev/ttyMFD1"
});


board.on('ready', function(){

  var sensor = new five.Multi({
    controller: 'BME280',
    freq: 10*1000
  });

  var gps = new five.GPS([10,11]);

  gps.on('message', function(){
    console.log(gps.latitude);
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
