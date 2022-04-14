var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.subscribe('LOCATION');

client.on('connect', function() {
	console.log('Client Konuma Subscribe Oldu');
});

client.on('message', function(topic, message) {
	console.log(topic, ' : ', message.toString());
});