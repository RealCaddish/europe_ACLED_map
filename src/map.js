// load data
import conflicts from './data/conflicts_clipped.json';
import countries from './data/countries_clipped.json';
import graticules from './data/graticules.json';
import urbans from './data/urban_areas.json';

// load libraries
import fetch from 'd3-fetch';
import L from 'leaflet';
import turf from '@turf/turf';

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhdG5uciIsImEiOiJja3Z2MnQ5YWUwbTI5Mm5vNmwwajM0N2prIn0.fnQmRz1QKtEr17wabjsPOA';







// Promise.all([countries, urbans, graticules, conflicts]).then(drawMap);

// function drawMap(data) {

//   // pull out separate arrays and assign to variables
//   const country = data[0];
//   const urban = data[1];
//   const grats = data[2];
//   const conflict = data[3];

//   console.log(conflict)

//   // layer options below
//   const countryOptions = {
//     fillOpacity: 0.3,
//     fillColor: '#e0ecf9',
//     color: '#151f2b',
//     weight: 1.7,
//     opacity: 1,
//   };

//   const element = document.createElement('div');
//   element.id = 'map';
//   document.body.appendChild(element);

//   const options = {
//     center: [50.6, 27.3],
//     zoom: 5
//   };

//   const map = L.map('map', options);

//   L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//     subdomains: 'abcd',
//     maxZoom: 20
//   }).addTo(map);

//   // create a layerGroup with geojson data 
//   const countryLayerGroup = L.geoJSON(country, {
//     style: countryOptions
//   }).addTo(map);



// export default drawMap;