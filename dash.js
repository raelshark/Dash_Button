var config = require('./config');
var dash_button = require('node-dash-button');
var dash = dash_button(config.dash.MAC_address, null, null, 'all');

dash.on("detected", function (){
    console.log("dash pressed");
    triggerNotification();
});

var triggerNotification = function() {
  var https = require('https');

  console.log('Calling ' + config.target.name);
  console.log('URL: ' + config.target.url);

  https.get(config.target.url)
    .on("error", function(e){
      console.log("Got error: " + e.message);
    });
}
