import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady(  state ) {
        return !!state.userLocation;  //doble !! para volver su valor  a false, de otra manera da undefined. un ! vuelve undefined a true y !! a false
    }
}



export default getters;