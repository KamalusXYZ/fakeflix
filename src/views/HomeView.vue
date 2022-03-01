<template>
  <div class="home">
    <h2>FakeFlix</h2>
    <br />
    <!-- <search-result-cmp msg="Welcome to Your Vue.js App" /> -->
    <!-- <caroussel-cmp />
    <bandeau-cmp /> -->

    <input placeholder="Entrez le nom d'un film" v-model="search" type="text" />
    <input v-on:click="SearchMovie" type="submit" value="Rechercher un film" />

    <div class="resultat">
      <div class="thumbnailmovie" v-for="movie of movies" :key="movie.id">
        <a href="">{{ movie.title }}</a>
        <a href=""
          ><img :src="posterUrl(movie.poster_path)" alt="movie.title"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import SearchResultCmp from "@/components/SearchResultCmp.vue";
// import CarousselCmp from "@/components/CarousselCmp.vue";
// import BandeauCmp from "@/components/BandeauCmp.vue";

export default {
  name: "HomeView",
  components: {
    //SearchResultCmp,
    // CarousselCmp,
    // BandeauCmp,
  },

  data() {
    return {
      search: "",
      movies: [],
    };
  },

  methods: {
    SearchMovie: function () {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=16339e3d2f16c3253b083ac43d403e38&page=1&query=" +
          this.search
      )
        .then((response) => response.json())
        .then((movies) => {
          console.log(movies);
          this.movies = movies.results;
        })
        .catch((e) => {
          console.error("ERREUR", e);
        });
    },

    posterUrl: function (posterPath) {
      return `https://image.tmdb.org/t/p/original${posterPath}`;
    },
  },
};
</script>

<style >
a {
  text-decoration: none;
  color: inherit;
}

h2 {
  color: #d90b1c;
  font-size: 70px;
}

.thumbnailmovie {
  width: 270px;
  padding: 5px 5px 30px 5px;
  width: 260px;
  font-size: 20px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

img {
  max-width: 100%;
  vertical-align: middle;
  height: auto;
}

.resultat {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;

  margin: 0 auto;
  text-align: center;

  background-color: black;
  color: white;

  border-radius: 3px;
}
</style>
