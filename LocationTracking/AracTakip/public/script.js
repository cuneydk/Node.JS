var cookie_string = document.cookie;
var cerezler = document.cookie.split(";");
for (var i = 0; i < cerezler.length; i++) {
    var cerez_degeri = cerezler[i].split("status%3D");
}

var coords = [];
$(document).ready(function () {
    $.ajax({
        url: "/gps",
        type: "POST",
        success: function (response) {
            coords = response;
        },
    });
});



var h;
var m;
window.onload = startTime;
function startTime()
{
 var today=new Date();
 h=today.getHours();
 m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('saat').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}


var map, marker;
function initMap() {
    myLatLng = { lat: 40.821955, lng: 29.923659 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 3.5,
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Benim konumum!",
    });
}

// mqtt
var client = mqtt.connect('ws://127.0.0.1:3000');
console.log(cerez_degeri[1]);

var x1=24, x2=24;
subPub();

function fTime() {
    x1=parseInt(document.getElementById("t1").value);
    x2=parseInt(document.getElementById("t2").value);
    //document.getElementById("toplam").innerHTML=x1 + x2;
    clearMarkers();
    subPub();
}

function subPub() {
if (cerez_degeri[1] == 'Admin') {
    client.subscribe('LOCATION', function () {
        coords.forEach(function (element) {
            var dataStr = element.Saat + "," + element.Lat + "," + element.Lng + "," + element.ID;
            client.publish('LOCATION', dataStr, {
                retain: true, // Retain Publish yeni bağlanan clienta en son mesajı ulaştır
            });
        });
    });
} else {
    client.subscribe('MUSTERI', function () {
        coords.forEach(function (element) {
            if (element.ID == 3 || element.ID == 4) {
                var dataStr2 = element.Saat + "," + element.Lat + "," + element.Lng + "," + element.ID;
            }
            client.publish('MUSTERI', dataStr2, {
                retain: true,
            });
        });
    });
}

client.on('connect', function () {
    console.log('MQTT Broker Calisiyor!');
});

client.on('message', function (topic, message) {
    console.log(topic, ' : ', message.toString());
    switch (topic) {
        case 'LOCATION':
            updateMap(message);
            break;
        case 'MUSTERI':
            updateMap(message);
            break;
        default:
            break;
    }
});

}

var marker1=[];
var marker2=[];
var marker3=[];
var marker4=[];

function updateMap(message) {

    [saat, lat, lng, tID] = message.toString().split(',');
    var spsaat = saat.substring(0,2);

    let pos = { lat: parseFloat(lat), lng: parseFloat(lng) };

if ((x1==24 && x2==24) || (spsaat>=x1 && spsaat<x2)) {
    if (tID == 1) {
        newMarker = new google.maps.Marker({
            position: pos,
            icon: {
                url: 'img/pink.png',
                scale: 0.075,
            },
            map,
            title: "Taxi ID: " + tID + " | " + "Saat: " + saat,
        });
            //newMarker.setPosition(pos);
            //map.setCenter(pos);
            marker1.push(newMarker);
    }

    if (tID == 2) {
        newMarker = new google.maps.Marker({
            position: pos,
            icon: {
                url: 'img/green.png',
                scale: 0.075,
            },
            map,
            title: "Taxi ID: " + tID + " | " + "Saat: " + saat,
        });
        //newMarker.setPosition(pos);
        //map.setCenter(pos);
        marker2.push(newMarker);
    }
    if (tID == 3) {
        newMarker = new google.maps.Marker({
            position: pos,
            icon: {
                url: 'img/white.png',
                scale: 0.075,
            },
            map,
            title: "Taxi ID: " + tID + " | " + "Saat: " + saat,
        });
        //newMarker.setPosition(pos);
        //map.setCenter(pos);
        marker3.push(newMarker);
    }
    if (tID == 4) {
        newMarker = new google.maps.Marker({
            position: pos,
            icon: {
                url: 'img/yellow.png',
                scale: 0.075,
            },
            map,
            title: "Taxi ID: " + tID + " | " + "Saat: " + saat,
        });
        //newMarker.setPosition(pos);
        //map.setCenter(pos);
        marker4.push(newMarker);
    }
}
}

function clearMarkers() {
    for (var i = 0; i < marker1.length; i++) {
        marker1[i].setMap(null);
      }

      for (var i = 0; i < marker2.length; i++) {
        marker2[i].setMap(null);
      }
      for (var i = 0; i < marker3.length; i++) {
        marker3[i].setMap(null);
      }
      for (var i = 0; i < marker4.length; i++) {
        marker4[i].setMap(null);
      }
}