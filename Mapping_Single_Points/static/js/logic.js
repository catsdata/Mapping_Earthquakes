// Add console.log to check to see if our code is working.
console.log("working");

// setView() sets the view of the map with a geographical center with coordinates and zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle for Los Angeles
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Add a light yellow circle with 300 radius
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
 }).addTo(map);

// We create the tile layer that will be the background of our map (see Mapbox Static Tiles API for more sytles).
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Skill Drill:  Using the Leaflet documentation: 
// create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.