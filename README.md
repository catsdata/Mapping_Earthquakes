# Mapping Earthquakes

<details><summary>Table of Contents</summary>
<p>

1. [Overview](https://github.com/catsdata/Mapping_Earthquakes#overview)
2. [Resources](https://github.com/catsdata/Mapping_Earthquakes#resources)
3. [Results](https://github.com/catsdata/Mapping_Earthquakes#results)
4. [Summary](https://github.com/catsdata/Mapping_Earthquakes#summary)

</p>
</details>


## Overview

**Purpose**

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

**Tasks**

To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

**Approach**

Your approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. You'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

**Final**

The earthquake map has been created with two different maps and the earthquake overlay. Now, update the code to see the earthquake data in relation to the tectonic plates’ location on the earth.  Include all the earthquakes with a magnitude greater than 4.5 on the map, along with a third map style.

## Resources

- Data Sources: 
    - [Weekly Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
    - [Major Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)
    - [Tectonic Plates](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

- Languages:  
    - Javascript
    - HTML
    - CSS

- Libraries & Formats:
    - GeoJSON
    - Leaflet
    - D3.js
    - Mapbox (API's)


## Results

- Deliverable 1: Add Tectonic Plate Data      
    - The tectonic plate data is added as a second layer group 
    - The tectonic plate data is added to the overlay object
    - The d3.json() callback is working and does the following:
        - The tectonic plate data is passed to the geoJSON() layer
        - The geoJSON() layer adds color and width to the tectonic plate lines
        - The tectonic layer group variable is added to the map
    - The earthquake data and tectonic plate data displayed on the map when the page loads

- Deliverable 2: Add Major Earthquake Data
    - The major earthquake data is added as a third layer group
    - The major earthquake data is added to the overlay object
    - The d3.json() callback is working and does the following:
        - Sets the color and diameter of each earthquake.
        - The major earthquake data is passed to the geoJSON() layer.
        - The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
        - The major earthquake layer group variable is added to the map
    - All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off

- Deliverable 3: Add an Additional Map
    - A third map tile layer is created
    - The third map is added to the overlay object 
    - All the earthquake data and tectonic plate data are displayed on the all maps of the webpage

Challenge was completed as tasked and listed above:

![challenge](https://github.com/catsdata/Mapping_Earthquakes/Earthquake_Challenge/ChallengeResults.png)

However, with the addition of major earthquakes specific data and the task to update the colors of the 3 top magnitude groupings of such, the legend no longer properly identified magnitudes by color regardless of layer.  The original color scheme was in whole numbers, and we now had to contend with a 4.5.  Therefore, I updated the legend code amd colors of both the earthquakes and major earthquakes layers to properly indicate magnitude the same manner.  Through debugging, I noticed that having the tectonic polygons as a final GeoJSON, it was making the initial load of the html look cluttered, so I rearranged the d3's in order of preference and cleaned up the notes.  

![challengefix](https://github.com/catsdata/Mapping_Earthquakes/Earthquake_Challenge/ChallengeFix.png)


## Summary

Upload the Earthquake_Challenge folder with the following folders and files to your Mapping_Earthquakes GitHub repository:

1. The Earthquake_Challenge folder
    - index.html
    - static
        - css
            - style.css
        - js
            - challenge_logic.js

2. A README.md that describes the purpose of the repository. Although there is no graded written analysis for this challenge, it is encouraged and good practice to add a brief description of your project.
