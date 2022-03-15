import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//si no sirve el geolocation, es decir el navegador no soporta el geolocation, no servirá la app
if (!navigator.geolocation) {
  throw new Error("Tu navegador no soporta el Geolocation");
}

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGF1c2FuY2hleiIsImEiOiJjbDBsZjRoNWYwNDhjM2NwMjB5ZTludXRlIn0.GZReYP4vQNEtTwBLoEeP-w';

createApp(App).use(store).use(router).mount("#app");
