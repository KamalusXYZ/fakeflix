<template>
  <div class="box">
    <h3>A la une</h3>
    <div>
      <div>
        <hooper
          :wheelControl="false"
          :transition="1000"
          :playSpeed="6000"
          :autoPlay="true"
        >
          <slide v-for="movie of discover" v-bind:key="movie.id">
            <a :href="MovieUrl(movie.id)"
              ><img :src="posterUrl(movie.poster_path)" :alt="movie.title"
            /></a>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>


<script>
import formaters from "@/mixins/formaters";

export default {
  components: {
    Hooper,
    Slide,
  },

  data() {
    return {
      discover: [],
    };
  },

  created: function () {
    this.DiscoverMovies();
  },

  name: "DiscoverSlide",

  mixins: [formaters],

  methods: {
    MovieUrl: function (moviePath) {
      return `film/${moviePath}`;
    },

    DiscoverMovies() {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=16339e3d2f16c3253b083ac43d403e38&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .then((response) => response.json())
        .then((discover) => {
          this.discover = discover.results;
          console.log(discover);
        })
        .catch((e) => {
          console.error("ERREUR", e);
        });
    },
  },
};

import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
</script>



<style >

h3{

  font-size: 50px;
}
.hooper-list {
  height: auto;
}
.box {
  margin: 50px auto;
}
</style>