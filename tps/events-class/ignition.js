var Countdown = require('./countdown');

var countdown = new Countdown();
// attach event handlers, and starts.
countdown.on('start', function() {
  console.log('The final countdown !');

}).on('tick', function(remains){
  console.log('...'+remains);

}).on('stop', function(){
  console.log('IGNITION !');

}).start(5);
