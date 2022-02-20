
// initial variable declaration
const LngLat = [];
const markers = [];
//set marker colors
const colors = [];
for (let i = 0; i < 50; i++) {
    colors.push('#' + (Math.random().toString(16) + "000000").substring(2, 8))
    
};

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VnaXlhayIsImEiOiJja3o2bm9jNnUxMmJkMm9tcHZuMnNrcTVwIn0.bwPeTLfz34HEZgBD6vk-RQ';

var map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/mapbox/streets-v11',
 center: [-71.104081, 42.36554],
 zoom: 14 
 } 
);

// get bus data and set them on the map
async function run(){
    
markers.forEach((marker) => marker.remove());
const locations = await getBusLocations();
//set markers on the map
for(i = 0; i < locations.length; i++){
    markers[i] = new mapboxgl.Marker({ color: colors[i] })
    .setLngLat([locations[i].attributes.longitude, locations[i].attributes.latitude])
    .addTo(map)
}

// timer
setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;
}

run();

var marker = new mapboxgl.Marker()
.setLngLat([-71.092761, 42.357575])
.addTo(map)

 var counter = 0;
 function move(){
   setTimeout(()=>{
     if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
   }, 1000)
 }
