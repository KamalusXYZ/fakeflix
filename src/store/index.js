import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({





  state: {
    query: ""
  },







  getters: {},


  mutations: {
    setQuery: function (state, query) {
      state.query = query
    }
  },




  actions: {


    searchMovie() {




    }


  }
})