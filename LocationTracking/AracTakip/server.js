var redis = require('redis');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { text: "Cuneyd" });
});

const gpsRouter = require("./routes/gps");
app.use("/gps", gpsRouter );

var mosca = require('mosca')

var ascoltatore = {
  type: 'redis',
  redis: require('redis'),
  db: 12,
  port: 6379,
  return_buffers: true, // to handle binary payloads
  host: "localhost"
};

var moscaSettings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Redis
  },
  http: {
    port: 3000,
  },
};

// mosca server ayaga kaldirma
var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

// bir client baglandiginda
server.on('clientConnected', function (client) {
  console.log('client connected', client.id);
});

// bir mesaj alındığında
server.on('published', function (packet, client) {
  console.log('Published', packet.topic, packet.payload);
});

// Mosca hazir oldugunda
function setup() {
  console.log('MOSCA SERVER AYAGA KALKTI')
}

app.listen(8000);