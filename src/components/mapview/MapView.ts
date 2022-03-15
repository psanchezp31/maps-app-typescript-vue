import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore } from "../../composables/usePlacesStore";
import { useMapStore } from "../../composables/useMapStore";

export default defineComponent({
  name: "MapView",
  setup() {
    const { setMap } = useMapStore();
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div element no existe");
      if (!userLocation.value) throw new Error("UserLocation no existe");

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/light-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopup = new Mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`
      <h4>Aquí estoy </h4>
      <p>Actualmente en Cúcuta</p>
      <p>${userLocation.value}</p>`);

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);

      //todo establecer el mapa en vuex

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });
    
    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
