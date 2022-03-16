import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import searchApi from "../../apis/searchApi";
import { Feature, PlacesResponse } from "../../interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    //todo: colocar loading
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit("setLngLat", { lng: coords.longitude, lat: coords.latitude }),
      (err) => {
        console.error(err);
        throw new Error("No geolocation :(");
      }
    );
  },
  //todo: colocar el valor de retorno
  async searchPlacesByTerm(
    { commit, state },
    query: string
  ) : Promise<Feature[]> {
    if (query.length === 0) {
      //todo setplaces
      commit("setPlaces", []);
      return [];
    }
    commit("setIsLoadingPlaces");
    if (!state.userLocation) {
      throw new Error("No hay ubicación del usuario");
    }
    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(","),
      },
    });
    commit("setPlaces", resp.data.features);
    return resp.data.features
  },
};

export default actions;
