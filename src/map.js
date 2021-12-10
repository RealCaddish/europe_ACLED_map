// load data
import conflicts from './data/cleaned_conflicts.csv';
import countries from './data/countries.json';
import graticules from './data/graticules.json';
import urbans from './data/urban_areas.json';

// load libraries
import fetch from 'd3-fetch'
import L from 'leaflet'
import turf from '@turf/turf'


function drawMap(data) {

  const element = document.createElement('div');
  element.id = 'map';
  document.body.appendChild(element);

  const options = {
    center: [50.6, 27.3],
    zoom: 5
  };

  const map = L.map('map', options);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
};

export default drawMap;