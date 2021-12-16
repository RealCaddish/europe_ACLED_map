
URL: 
https://europeconflictsmap.surge.sh/

# A Map of Ukraine-Russia Social and Political Unrest
<a href='https://acleddata.com/about-acled/'> The Armed Conflict Location & Event Data Project</a> is a non-profit organization who regularly collects data on crisis events, actors, dates, and more information surrounding various destabilizing social and political events throughout the world. Much of this data is collected by local organizations whom then disseminate  it to ACLED, journalists, and other agencies. Tools used include MapboxGL, various npm packages, and Python for data analysis.

This project seeks to identify destabilizing events collected in eastern Europe - particularly Ukraine, Russia, Poland, and Belarus, and map data pertaining to each event within a map developed for the web. Users can click on different events to view what occurred, when it occurred, and more detailed information about the event. 

Point data was collected from the ACLED pertaining to various types of events that were recorded in a four-year timespan. These events include 'Armed clashes, peaceful protests, attacks, remote/explosive IEDs, Disrupted weapons use, and shelling/artillery attacks.' 


## Table of Contents 
1. Data Processing
2. Data Webmapping
3. Sources


## Chapter 1: Data Processing
Download for the ACLED data was conducted through their API at <a href='https://acleddata.com/data-export-tool/'>this resource link.</a> I downloaded data for Belarus, Russia, Ukraine, Lithuania, and Poland capturing all political/social events since 2018. 

Next, I created a Python Notebook within my <i>csv</i> folder and imported the data into it for processing. Here, I checked the data, looked at percentages of attack types, and did more of my analysis here to determine which questions to ask of the data. Naturally, I found the event-types to be an excellent category to classify the points so that users can get a sense of the socio-political events of the past four years. After this analysis, I uploaded the csv data to Mapbox Studio for processing a new tileset with it. 

After this was completed, I downloaded my style.json file to add it to my map build. I utilized a Webpack environment and imported various libraries with npm to begin the web map development process.  


=======
Mapping Conflicts in Eastern Europe: 
A visualization of conflict data collected by the ACLED in Eastern Europe (particular focus on Ukraine, Belarus, and Russia) for 2021. 
>>>>>>> 39e1b5ee5ba0b5d31f0bc4c8f8e3272086412e59
