import { createStore } from 'vuex';

import exampleModule from './module-template'
import {ExampleStateInterface} from './module-template/state'

export interface StateInterface{
  example: ExampleStateInterface
}

export default createStore<StateInterface>({
  modules:{
    example:exampleModule
  }
})