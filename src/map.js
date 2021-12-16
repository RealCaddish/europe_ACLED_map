
import conflicts from './data/conflicts_clipped.json';
import countries from './data/countries_clipped.json';
import graticules from './data/graticules.json';
import urbans from './data/urban_areas.json';
import style from './Eastern-Europe-Conflicts(ckx4yjck60dcg15mm3jhrb33u)/style.json';
import './mapboxStyle.css'


import mapboxgl from 'mapbox-gl'


function makeMap() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhdG5uciIsImEiOiJja3Z2MnQ5YWUwbTI5Mm5vNmwwajM0N2prIn0.fnQmRz1QKtEr17wabjsPOA';


  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: style, // style URL
    center: [32.9, 51.1], // starting position [lng, lat]
    zoom: 4.5, // starting zoom
    attributionControl: false
  })
    .addControl(new mapboxgl.AttributionControl({
      customAttribution: 'Map designed by Nathanel Deaton'
    }));

    // add conflict points tileset 
    map.on('load', function() {
      map.addSource('conflicts', {
        type: 'vector', 
        url: 'mapbox://deatnnr.ckvye80p'
      })
      map.addLayer({
        'id': 'conflictPoint', // id for later reference
        'type': 'circle',
        'source': 'conflicts',
        'source-layer': 'conflicts-8n14vd', // refers to name of tileset hosted on Mapbox Studio
        'layout': {},  
      });
    });

    // create popup for information
    map.on('mouseenter', 'conflictPoint', function(e) {
      
      let features = map.queryRenderedFeatures(e.point);
      
      console.log(features)
    });

    // create a popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on('mouseenter', 'conflictPoint', (e) => {
      
      const features = map.queryRenderedFeatures(e.point);

      // change the cursor style as a UI affordance
      map.getCanvas().style.cursor = 'pointer';

      // populate the popup and set its coordinates
      // based on feature found
      const coordinates = e.features[0].geometry.coordinates;
      const actor1 = e.features[0].properties.actor1;

      console.log(actor1)

      popup
      .setLngLat(coordinates)
      .setHTML(`Actor 1`)
      .addTo(map);
    });

    map.on('mouseleave', 'conflictPoint', () =>  {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

};

export default makeMap

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