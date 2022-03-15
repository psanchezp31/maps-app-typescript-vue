import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../store/index";
import Mapboxgl from "mapbox-gl";

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance),

    //mutations
    setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map), //se recibe un map de tipo Mapboxgl

    //actions

    //getters
    isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),
  };
};
