style: 'mapbox://styles/keirakentt/cmh9r72jm00bj01sqgtozfhdf', // Your Style URL goes here
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VpcmFrZW50dCIsImEiOiJjbWg5cjNxNG0wYWN2MmtvanpmY2E2Y3I2In0.j7tZg_4tun5N_UdEPYgvsQ';
const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });