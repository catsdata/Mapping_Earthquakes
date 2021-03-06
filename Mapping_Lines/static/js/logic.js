// Add console.log to check to see if our code is working.
console.log("working");

// setView() sets the view of the map with a geographical center with coordinates and zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([36.1733, -120.1794], 4);

// // Create line between LAX and SFO airport coordinates
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red or yellow.
L.polyline(line, {
  // https://leafletjs.com/SlavaUkraini/reference-1.6.0.html#polyline-option
  dashArray: "5",
  color: "blue",
  weight: "4",
  opacity: "0.5",
}).addTo(map);


// An array containing each city's location, state, and population.
// When handling large datasets, it's a best practice to have the data in an external file and refer to that file and dataset in the logic.js file.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });
// alternate code: for (let i = 0; i < cities.length; i++)

// Code as above, but referencing file for data
// Get data from cities.js

let cityData = cities;
// Loop through the cities array and create one marker for each city.
// circleMarker vs marker makes circle rather than blue teardrop
// radius indicates to vary size of marker based on population
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location) //{, radius: city.population/100000}
    // To add data from each object in the cities array, we'll use Leaflet's bindPopup() method on the marker() function
    // .toLocaleString() will add commas in population
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map (see Mapbox Static Tiles API for more sytles).
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// SKILL DRILL
// Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops:
// Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
// Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
