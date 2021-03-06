import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../store/index";
import Mapboxgl from "mapbox-gl";
import { Feature } from '../interfaces/places';
import { LngLat } from '../store/map/actions';

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance),

    //mutations
    setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map), //se recibe un map de tipo Mapboxgl
    setPlaceMarkers:(places: Feature[]) =>store.commit('map/setPlaceMarkers', places),
    //actions
    getRouteBetweenPoints:(start:LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', {start, end}),
    
    //getters
    isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),
  };
};
