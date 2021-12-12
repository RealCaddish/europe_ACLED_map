"use strict"

// load libraries
var fs = require('fs')
var csv2geojson = require('csv2geojson')

// load csv data 
fs.readFile('./data/cleaned_conflicts.csv', 'utf-8', (err, csvString) => {

  if (err) throw err;

  // convert to geoJSON
  csv2geojson.csv2geojson(csvString, {
    latfield: 'latitude',
    lonfield: 'longitude',
    delimiter: ','
  },

    (err, geojson) => {

      if (err) throw err;

      console.log(geojson)

      // write file
      fs.writeFile('./data/conflicts.json', JSON.stringify(geojson), 'utf-8', (err) => {

        if (err) throw err;

        console.log('done writing file');
      })

    })
});