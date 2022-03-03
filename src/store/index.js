import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


  state: {
    query: "",
    movies:[]
  },


  getters: {},


  mutations: {
    setQuery: function (state, query) {
      state.query = query
    },

    setMovies: function (state, movies) {
      state.movies = movies
    }
  },




  actions: {

    



    searchMovies: function (context, query)  {

      context.commit("setQuery", query);
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=16339e3d2f16c3253b083ac43d403e38&page=1&query=${context.state.query}`
        )
          .then((response) => response.json())
          .then((movies) => {
            console.log(movies);
         
            context.commit("setMovies", movies.results)
          })
          .catch((e) => {
            console.error("ERREUR", e);
          });


    }


  }
})