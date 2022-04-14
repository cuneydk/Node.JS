//api istegi aldigimiz kisim

const express = require("express");
const router = express.Router();

var arrGps = [];
const gpsData = require("../GPS.json")
gpsData.forEach(function(element) {
    arrGps.push(element);
});

router.post("/",(req, res) => {
    res.send(arrGps);
  });

module.exports = router;