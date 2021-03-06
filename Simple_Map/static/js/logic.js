// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Assigning variable 'map' to the object L.map()
// 'mapid' references the id tag in our <div> element on the index.html file
// setView() sets the view of the map with a geographical center with coordinates and zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// alternate code:
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//Initial code
// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // alternate style ids: mapbox/streets-v11, /outdoors-v11, /light-v10, /dark-v10, /satellite-v9, /satellite-streets-v11
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// revised code
// We create the tile layer that will be the background of our map (see Mapbox Static Tiles API for more sytles).
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


