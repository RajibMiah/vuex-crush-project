import { createStore } from "vuex";
import counterModule from './modules/counter.module.js';
import employeeModule from "./modules/employee.module.js";
export default createStore({
  state: {
    counterState:counterModule.state,
    employeeState:employeeModule.state
  },
  mutations: {},
  actions: {},
  modules: {
    counterModule,
    employeeModule
  },
  getters: {
    getCounterState:function(state){
      return state.counterState.counter
    },
    getEmployeeState:function(state){
      return state.employeeState.employeesList
    }
  },
});
