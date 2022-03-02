<template>
  <div>
    <div class="menu d-flex align-items-center justify-content-around">
      <nav>
        <router-link to="/"
          ><div class="btn btn-primary m-2 fs-5">Acceuil</div></router-link
        >
        <router-link to="/favoris"
          ><div class="btn btn-primary m-2 fs-5">Favoris</div></router-link
        >
        <router-link to="/a-voir"
          ><div class="btn btn-primary m-2 fs-5">
            Ma liste de films
          </div></router-link
        >
      </nav>
      <div>
        <input
          class="input"
          v-on:keydown.enter="SearchMovie"
          placeholder="Entrez le nom d'un film"
          type="text"
          id="query"
        />
        <input
          class="btn btn-primary"
          v-on:click="SearchMovie"
          type="submit"
          value="Rechercher un film"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    SearchMovie: function () {
      this.$store.commit("setQuery", document.getElementById("query").value);

      //action : dispatch

      //   fetch(
      //     "https://api.themoviedb.org/3/search/movie?api_key=16339e3d2f16c3253b083ac43d403e38&page=1&query=" +
      //       this.search
      //   )
      //     .then((response) => response.json())
      //     .then((movies) => {
      //       console.log(movies);
      //       this.movies = movies.results;
      //     })
      //     .catch((e) => {
      //       console.error("ERREUR", e);
      //     });
    },
  },
};
</script>