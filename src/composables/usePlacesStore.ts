import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../store/index";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>(); //el store general por eso lleva el StateInterface

  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation");
    }
  });

  return {
    //state
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),
    places: computed(()=>store.state.places.places),
    isLoadingPlaces: computed(()=>store.state.places.isLoadingPlaces),
    //getters
    isUserLocationReady: computed(
      () => store.getters["places/isUserLocationReady"]
    ),
    //actions
    searchPlacesByTerm: (query = "") =>
      store.dispatch("places/searchPlacesByTerm", query),
    //mutations
  };
};
