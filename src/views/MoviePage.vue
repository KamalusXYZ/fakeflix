<template>
  <div>
 

    <div class="video">

        <iframe v-if="trailer != null" width=78% height="400" :src="videoUrl(trailer)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

      </div>

    <div class="titre">
      <h1>{{ movieFocused.title }}</h1>
      
    </div>
    <div class="conteneur d-flex align-items-center flex-wrap">
      <div class="video">

      </div>
      <div class="affiche">
        <img :src="posterUrl(movieFocused.poster_path)" />
      </div>
      <div class="infos">
        <p>Date de sortie: {{ movieFocused.release_date | formatDateFr }}</p>
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
    <span class="important">Vous pourriez aimer:</span>
    <div class="reco d-flex">
      
         <div v-if="reco1.id" class="sugg">
           <router-link :to="reco1.id">{{reco1.title}}</router-link>
           

           <router-link :to="reco1.id"><img :src="posterUrl(reco1.poster_path)" :alt="reco.title"></router-link> 
          </div>
          <div v-if="reco2.id" class="sugg">
           <router-link :to="reco2.id">{{reco2.title}}</router-link>

           <router-link :to="reco2.id"><img :src="posterUrl(reco2.poster_path)" :alt="reco.title"></router-link> 

          </div>
          <div v-if="reco3.id" class="sugg">
           <router-link :to="reco3.id">{{reco3.title}}</router-link>

           <router-link :to="reco3.id"><img :src="posterUrl(reco3.poster_path)" :alt="reco.title"></router-link> 
          </div>
          </div>
    
  </div>
</template>
console.log(reco1.id)
<script>
import formaters from "@/mixins/formaters";

export default {
  name: "MoviePage",
  mixins: [formaters],

  data() {
    return {
      movieFocused: [],
      trailer: "",
      reco: [],
      reco1: [],
      reco2: [],
      reco3: [],
    };
  },

  created: function () {
    this.displayMoviePage();
    this.displayTrailer();
    this.displayReco();
  },

  filters: {
    formatDateFr: function (value) {
      const event = new Date(value);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return event.toLocaleDateString("fr-FR", options);
    },
  },

  methods: {
    MovieUrl: function (moviePath) {
      return `${moviePath}`;
    },
    displayReco: function () {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/recommendations?api_key=16339e3d2f16c3253b083ac43d403e38`
      )
        .then((response) => response.json())
        .then((reco) => {
          this.reco = reco.results;
          this.reco1 = this.reco[0];
          this.reco2 = this.reco[1];
          this.reco3 = this.reco[2];
        })
        .catch((e) => {
          console.error("ERREUR", e);
        });
    },

    displayTrailer: function () {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=16339e3d2f16c3253b083ac43d403e38&language=en-US`
      )
        .then((response) => response.json())
        .then((trailer) => {
          this.trailer = trailer.results[0].key;
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

    videoUrl: function (url) {
      return `https://www.youtube.com/embed/${url}`;
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
.video {
  margin-top: 10px;
}
.reco {
  width: 50%;
  display: flex;
  margin: 0 auto;
}
.important {
  font-weight: bold;
  color: #ccc;
  font-size: 35px;
}
.sugg {
  margin: 5px;
  width: 30%;
}
</style>

