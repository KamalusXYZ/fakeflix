<template>
  <div>
    <h1>Page de films</h1>
    <p>Charger les information du film XXXXX (id)</p>
    <!-- console.log(this.$route.params.id) -->
  </div>
</template>

<script>
export default {
  name: "HomeView",

  methods: {
    displayMovieId: function () {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=16339e3d2f16c3253b083ac43d403e38&page=8&query=" +
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
  },
};
</script>

<style >
</style>

