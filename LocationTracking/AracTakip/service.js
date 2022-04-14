var redis = require('redis');
var rClient = redis.createClient();
rClient.on('connect', function () {
    console.log('Redis client bağlandı');
});

rClient.on('error', function (err) {
    console.log('Redis Clientda bir hata var ' + err);
});
