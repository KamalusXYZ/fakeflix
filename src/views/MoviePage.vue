<template>
  <div class="home">
    <nav class="menu">
      <router-link to="/"
        ><div class="btn btn-primary m-2 fs-5">Acceuil</div></router-link
      >
      <router-link to="/favoris"
        ><div class="btn btn-primary m-2 fs-5">Favoris</div></router-link
      >
      <router-link to="/a-voir"
        ><div class="btn btn-primary m-2 fs-5">Ma liste</div></router-link
      >
    </nav>

    <div class="titre">
      <h1>{{ movieFocused.title }}</h1>
    </div>
    <div class="conteneur d-flex align-items-center flex-wrap">
      <div class="affiche">
        <img :src="posterUrl(movieFocused.poster_path)" />
      </div>
      <div class="infos">
        <p>Date de sortie: {{ movieFocused.release_date }}</p>
        <p>Synopsis: {{ movieFocused.overview }}</p>
        <p>Informations : 
          <ul>
            <li>
             Popularité: {{movieFocused.popularity}}
            </li>
            <li>
             Note: {{movieFocused.vote_average}} sur {{movieFocused.vote_count}} votes

            </li>
          </ul>
          </p>
          <div class="box d-flex align-items-center justify-content-around pt-2">
            <button class="btn btn-success">Ajouter aux favoris</button>
            <button class="btn btn-success">Ajouter à ma liste</button>


          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePage",

  data() {
    return {
      movieFocused: [],
    };
  },

  created: function () {
    this.displayMoviePage();
  },

  methods: {
    displayMoviePage: function () {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=16339e3d2f16c3253b083ac43d403e38`
      )
        .then((response) => response.json())
        .then((movieFocused) => {
          this.movieFocused = movieFocused;
          console.log(this.movieFocused);
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

<style scoped >
.conteneur {
  margin: 15px auto;
  width: 80%;

  padding: 20px;
}
.titre {
  margin: 0 auto;
  width: 80%;

  padding: 20px;
}
.affiche {
  width: 30%;
}
.infos {
  width: 70%;
  padding: 15px;
  text-align: left;
}
.menu {
  padding: 15px;
}
</style>

