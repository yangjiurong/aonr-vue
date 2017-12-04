import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	liebiaoisCollapse: true
  },
  mutations: {
 	TOGGLE_SIDEBAR: state => {
      if (state.liebiaoisCollapse) {
        state.liebiaoisCollapse = true
      } else {
        state.liebiaoisCollapse = false
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
  	ToggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
})

export default store
