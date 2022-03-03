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
      <div class="video">

        <iframe width="560" height="315" :src="https://www.youtube.com/embed/xxxxxxxxxxxxxxxxxxxxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
    <div class="conteneur d-flex align-items-center flex-wrap">
      <div class="video">

      </div>
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
import formaters from "@/mixins/formaters";

export default {
  name: "MoviePage",
  mixins: [formaters],

  data() {
    return {
      movieFocused: [],
      trailer: ""
    };
  },

  created: function () {
    this.displayMoviePage();
    this.displayTrailer()
  },

  methods: {

    displayTrailer: function () {

      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=16339e3d2f16c3253b083ac43d403e38&language=en-US`
      )
        .then((response) => response.json())
        .then((trailer) => {
          console.log("test trailer" + trailer);
       
         this.trailer = trailer.results[0].key

        })
        .catch((e) => {
          console.error("ERREUR", e);
        });




    },

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
nav {
  padding: 15px;
}


</style>

