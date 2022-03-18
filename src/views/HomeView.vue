<template>
  <div>
    <NavBar></NavBar>

    <p v-if="query">
      Résultat pour la recherche: <span class="mots"> {{ query }}</span>
    </p>

    <div class="conteneur d-flex">
      <div class="home">
        <div v-if="!movies" class="vide">
          Recherchez un film parmis des milliers de titres.
        </div>
        <div id="searchresult" class="resultat">
          <transition-group name="bounce" tag="div">
            <div class="thumbnailmovie" v-for="movie of movies" :key="movie.id">
              <div class="titre justify-content-center">
                <router-link :to="MovieUrl(movie.id)">{{
                  movie.title
                }}</router-link>
              </div>

              <router-link :to="MovieUrl(movie.id)"
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
              </router-link>
            </div>
          </transition-group>
        </div>
      </div>

      <aside class="aside"><DiscoverSlide></DiscoverSlide></aside>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DiscoverSlide from "@/components/DiscoverSlide.vue";
import formaters from "@/mixins/formaters";

export default {
  name: "HomeView",
  components: {
    NavBar,
    DiscoverSlide,
  },
  mixins: [formaters],

  computed: {
    query: function () {
      return this.$store.state.query;
    },

    movies: function () {
      return this.$store.state.movies;
    },
  },

  methods: {
    MovieUrl: function (moviePath) {
      return `/film/${moviePath}`;
    },
  },
};
</script>

<style>
.aside {
  width: 30%;
  background-color: #0d0d0d;
  display: block;
  padding: 15px;
}
.home {
  width: 90%;
  margin: 0 auto;
}
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

  border-radius: 7px;
}

.resultat {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  text-align: center;
  background-color: #0d0d0d;
  color: white;
  border-radius: 3px;
}
.titre a {
  min-height: 55px;
  word-spacing: -1px;
  line-height: 23px;
  font-size: 28px;
  text-align: center;
}

.btn {
  padding-left: 10px;
  height: 45px;
  text-align: center;
}

.input {
  width: 250px;
  height: 40px;
  margin-right: 5px;
}
nav {
  padding: 15px;
}

.vide {
  font-size: 70px;
  color: rgb(90, 90, 90);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 25px;
}

/**transitions: */

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
