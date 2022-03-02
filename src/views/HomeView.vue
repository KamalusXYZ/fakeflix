<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="resultat">
      <p>Vos resultats pour la recherche: {{ query }}</p>
      <div class="thumbnailmovie" v-for="movie of movies" :key="movie.id">
        <div class="titre">
          <a :href="MovieUrl(movie.id)">{{ movie.title }}</a>
        </div>
        <a :href="MovieUrl(movie.id)"
          ><img
            v-if="movie.poster_path"
            :src="posterUrl(movie.poster_path)"
            alt="movie.title"
          />
          <img
            v-else
            src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
            alt="movie.title"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import formaters from "@/mixins/formaters";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  mixins: [formaters],

  computed: {
    query: function () {
      //TODO essayer les mapState
      return this.$store.state.query;
    },
  },

  data() {
    return {
      search: "",
      movies: [],
    };
  },

  methods: {
    SearchMovie: function () {
      // fetch(
      //   "https://api.themoviedb.org/3/search/movie?api_key=16339e3d2f16c3253b083ac43d403e38&page=1&query=" +
      //     this.search
      // )
      //   .then((response) => response.json())
      //   .then((movies) => {
      //     console.log(movies);
      //     this.movies = movies.results;
      //   })
      //   .catch((e) => {
      //     console.error("ERREUR", e);
      //   });
    },

    MovieUrl: function (moviePath) {
      return `film/${moviePath}`;
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

  background-color: #0d0d0d;
  color: white;

  border-radius: 3px;
}
.titre {
  height: 45px;
  word-spacing: -1px;
  line-height: 16px;
  font-size: 18px;
}

.btn {
  padding-left: 10px;
  height: 45px;
}

.input {
  width: 250px;
  height: 40px;
  margin-right: 5px;
}
nav {
  padding: 15px;
}
</style>
