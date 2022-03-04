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
<router-link to="/categories"
          ><div class="btn btn-info m-2 fs-5">
            Catégories
          </div></router-link
        >
    

      <div>
        <input
          class="input"
          v-on:keydown.enter="
            $store.dispatch('searchMovies', $event.target.value)
          "
          placeholder="Entrez le nom d'un film"
          type="text"
          id="query"
        />

        <button
          class="btn btn-primary"
          v-on:click="launchSearch"
          type="button"
          value="Rechercher un film"
        >
          Rechercher un film
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",

  computed: {
    query: function () {
      return this.$store.state.query;
    },
  },

  methods: {
    launchSearch: function () {
      let query = document.getElementById("query").value;
      this.$store.dispatch("searchMovies", query);
    },
  },
};
</script>

<style>
.mots {
  color: red;
  font-size: 40px;
  font-weight: bold;
}
</style>