<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="resultat">
      
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
      
      return this.$store.state.query;
    },

    movies: function () {

      return this.$store.state.movies
    }
  },



  methods: {
   

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
  min-height: 55px;
  word-spacing: -1px;
  line-height: 23px;
  font-size: 28px;
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
