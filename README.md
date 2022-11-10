# realTimeBusTracking

An app to track the locations of the buses running in the city of Boston.

## Descripion
This app tracks busses running in the city of Boston.

Each markers has different colors and they represent different busses. Bus locations are updated as time goes by.

## webpack config
token in .env file are read through either webpack-dotenv plugin or 
This app has 3 webpack files. Use webpack.dev.js for development 

For detail of mapbox token, see https://docs.mapbox.com/help/getting-started/access-tokens/ .

### For heroku user
This app is designed to run on heroku enviromental variable so it should read 

You can adjest location update interval by modifying setTimeOut function.

## Files included
README.md
real-time_bus_tracker.html
realtimebustracker.js
style.css

## Language used
HTML
CSS
Javascript
