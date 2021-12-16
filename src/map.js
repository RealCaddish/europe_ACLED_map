
import conflicts from './data/conflicts_clipped.json';
import countries from './data/countries_clipped.json';
import graticules from './data/graticules.json';
import urbans from './data/urban_areas.json';
import style from './Eastern-Europe-Conflicts(ckx4yjck60dcg15mm3jhrb33u)/style.json';
import './mapboxStyle.css';

import L from 'leaflet'


import mapboxgl from 'mapbox-gl'


function makeMap() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhdG5uciIsImEiOiJja3Z2MnQ5YWUwbTI5Mm5vNmwwajM0N2prIn0.fnQmRz1QKtEr17wabjsPOA';


  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: style, // style URL
    center: [32.9, 51.1], // starting position [lng, lat]
    zoom: 4.5, // starting zoom
    attributionControl: false,
    pitch: 45
  })
    .addControl(new mapboxgl.AttributionControl({
      customAttribution: 'Map designed by Nathanel Deaton'
    }));

    map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('map')}))

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
        'paint': {
          'circle-opacity': 0
          // 'circle-color' : [
          //   'match',
          //   ['get', 'conflicts'],
          //   'Peaceful protest',
          //   '#19944a',
          //   'Armed clash',
          //   '#b40808',
          //   'Shelling/artillery/missile attack',
          //   '#df800c',
          //   'Attack',
          //   '#de5454',
          //   'Violent demonstration',
          //   '#f0ed2d',
          //   'Protest with intervention',
          //   '#92903a',
          //   'Excessive force against protesters',
          //   '#daa85d',
          //   'blue'
          // ]
        }
      });
    });

    // create a popup
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 10
    });

    map.on('mouseenter', 'conflictPoint', (e) => {

      const features = map.queryRenderedFeatures(e.point);

      console.log(features)
      
      // change the cursor style as a UI affordance
      map.getCanvas().style.cursor = 'pointer';

      // populate the popup and set its coordinates
      // based on feature found
      const coordinates = e.features[0].geometry.coordinates.slice();
      const actor1 = e.features[0].properties.actor1;
      const actor2 = e.features[0].properties.actor2;
      const admin = e.features[0].properties.admin1;
      const date = e.features[0].properties.event_date;
      const fatalities = e.features[0].properties.fatalities;
      const locale = e.features[0].properties.location;
      const notes = e.features[0].properties.notes;
      const source = e.features[0].properties.source;
      const event_type = e.features[0].properties.sub_event_type;
      const year = e.features[0].properties.year;



      console.log(actor1)

      popup
      .setLngLat(coordinates)
      .setHTML(`<h3>Event Type: ${event_type}</h3>
                <h4>Date:</h4> ${date}
                <h4>Administration:</h4> ${admin}
                <h4>Location:</h4> ${locale}
               <h4> Fatalities:</h4> ${fatalities}
                <h4>Actor 1:</h4> ${actor1}
                <h4>Actor 2:</h4> ${actor2}
               <h4> Notes:</h4> ${notes}
                <h4>Source:</h4> ${source}

                `)
      .addTo(map);
    });

    map.on('mouseleave', 'conflictPoint', () =>  {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

    // add scale control to map 
    const scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    });
    map.addControl(scale);
};

export default makeMap

