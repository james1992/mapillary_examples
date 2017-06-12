# Hackathon Digitaal Stelsel Omgevingswet

The Hackathon Digitaal Stelsel Omgevingswet event poses challenging questions to participants, including how to offer real time digital information about the city and how to find appropriate locations for initiatives. The challenge also goes to the drawing board for questions about visualization of the effects of initiatives and solving such challenges as instance traffic, demographics, or air pollution. Mapillary can be a powerful asset in this challenge, as it can provide a platform for collecting and sharing imagery, a map of Mapillary coverage, an embed-friendly viewer for imagery, vector tiles of imagery coverage and detected traffic sign locations, as well as image detection datasets including vegetation and zebra crosswalk locations.

## Mapillary prerequisites

In order to use Mapillary's API, data tiles, and viewer, you'll need to obtain a client ID. We've created the following ClientID for you to use for your app, **but be warned that it will expire a week after the hackathon**. Contact us at [hello@mapillary.com](hello@mapillary.com) after the hackathon if you'd like to obtain a long-term client ID.

**MYTrafficHack2017 special access client ID:** UTZhSnNFdGpxSEFFREUwb01GYzlXZzo3MDFiMzVhOTIxYTZkMzEz

One of the easiest ways to use Mapillary in your projects is to embed it using an iframe. Instructions can be found here: http://blog.mapillary.com/update/2016/11/30/embed-mapillary.html

![get an embed](https://i.imgur.com/Z7V2E1k.gif)

## Mapillary hack ideas

We are always thinking about how to use Mapillary in creative ways, and we present to you some of our hack ideas that you can freely commandeer to make this event a success for you. 

To get started, check out Mapillary coverage in and around Amsterdam: https://www.mapillary.com/app/?lat=52.35601833567023&lng=4.925394378801599&z=11.481795519856396&focus=map&mapStyle=esri

![screenshotof AMS coverage](https://github.com/mapillary/mapillary_examples/raw/master/hacks/hackathon/amsterdam/ams.PNG)

https://www.mapillary.com/map/im/YpNWlVsGn_5lGdnvWZDDtQ

![centralams](https://d1cuyjsrcm0gby.cloudfront.net/YpNWlVsGn_5lGdnvWZDDtQ/thumb-2048.jpg)

It's extremely limited to just a few major roads on the outskirts, and more dense in the city center. If you take some time to go out and **capture imagery** (guide here: https://help.mapillary.com/hc/en-us/categories/115000239905-Contributing), you can generate more Mapillary material to drive your own ideas, or utilize some ideas we've generated for you.

These ideas include:

* **Show photos inside both lowest and highest traffic congestion areas to illustrate visual difference in road shape and size, infrastructure, and other physical attributes--are areas that photos show to contain houses always less congested than areas with apartments? Do 5 lane vs. 4 lane roads make a difference? Do you see sidewalks in congested areas?**
* **Match high volume traffic against detected street signs in Mapillary, to see if traffic congestion is associated with stop signs, crosswalks, change in speed limits, school zones, or other situations indicated by signs**
* **Estimate the number of traffic lanes in Mapillary photos, to know if traffic congestion occurs in 2 lanes, 4 or even 5**
* **Inspect roads for infrastructure problems by matching Mapillary photo locations to traffic hotspots**
* **Enable users to report of high traffic congestion, infrastructure problems, or traffic incidents: link your app to Mapillary so users can upload photos on the spot that are automatically reconstructed into street level imagery in our viewer**
* **Show density of urban greenery using the detected vegetation in the `amsterdam_vegetation.geojson` data**
* **Show locations of zebra crosswalks using the detected locations in the `amsterdam_zebras.geojson` data**

## Mapillary as a Tool

Mapillary is a street-level imagery platform powered by collaboration and computer vision. We make images and data available to improve cities, build the maps of the future, and create safer transportation. 

Mapillary provides a variety of ways for you to harness its power in your hacks:

* **Capture your own imagery to give visual context to areas of interest:**
  * Download the Mapillary app on iOS and Android
  * Unofficial app for Windows phones
  * Use the mobile app to start capturing street level photos today, with your phone camera
  * Use your GoPro, 360 camera, or other action camera to capture photos and upload on our website
* **Use Mapillary to get a visual representation of the world, using Mapillary photos to:**
  * View areas on the map using images filtered by date
  * View locations of traffic signs and other traffic control objects
  * Verify accuracy of traffic GPS points by matching them to photos
  * Get a look at city infrastructure such as bridges and buildings
  * Find intersections, crosswalks, and highway on/off ramps
  * Verify OSM accuracy with photographic evidence
  * Compare photos of the same location at different times using Mapillary Time Travel
* **Use the Mapillary API to do deeper analysis:**
  * Search for images or sequences of images within a radius or bounding box
  * Filter photos by date and time, user, camera and compass angle
  * Estimate travel times between objects in photos by querying the time stamp of start and end photos
* **Use Mapillary vector tiles to:**
  * See the locations of Mapillary photo coverage
  * identify major routes which are more likely to have Mapillary photos
  * Give context to the location of photos seen in the viewer or queried in the API
  * See the GPS coordinates (latitude and longitude) of objects detected in photos, such as traffic signs
* **Use Mapillary for OSM iD Plugin:**
  * Use photos as a reference to add new objects to the map
  * Use photos to get a look at existing map objects, or confirm their existence

## Mapillary resources

You can get started with the above capabilities using the following links:

* Capture guide: https://help.mapillary.com/hc/en-us/categories/115000239905-Contributing
* Open Source Photo viewer and navigator (MapillaryJS): https://mapillary.github.io/mapillary-js/
* Using standard vector tiles: https://www.mapillary.com/developer/tiles-documentation/#coverage
* Using map object tiles: https://www.mapillary.com/developer/tiles-documentation/#map-objects
* API Guide: https://www.mapillary.com/developer/api-documentation/
* OSM iD + Mapillary guide: https://github.com/mapillary/UserGuide/wiki/OSM

## Mapillary examples

You can also borrow freely from any of these sample and example projects, many of which have code in this repo:

* MapillaryJS examples: https://github.com/mapillary/mapillary-js#examples
* Add vector tiles to a Mapbox map: https://www.mapillary.com/developer/tiles-documentation/#mapbox-gl-js
* Measuring growth of Mapillary coverage over time: https://mapillary-hacks.github.io/hackathon/malaysia/here/
* Comparing photos over time: http://blog.mapillary.com/update/2016/10/21/time-travel.html
* 
* Compare different maps in the same location: https://mapillary-hacks.github.io/hackathon/malaysia/compare/
* Compare Mapillary vector tiles with earthquake incident feeds: https://mapillary-hacks.github.io/hackathon/malaysia/earthquake/jp/
* Show Mapillary images in the context of city green infrastructure: https://cbeddow.github.io/bsas/
* See the `basic_maps` folder in this repo for examples of adding vector tiles and filtering them: https://github.com/mapillary-hacks/mapillary-hacks.github.io/tree/master/hackathon/malaysia/basic_maps
 
