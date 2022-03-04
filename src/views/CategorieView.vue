<template>
  <div>
    <NavBar></NavBar>
    <h1>Catégories</h1>
    <div class="categories d-flex justify-content-center">
      <div class="box" v-for="categorie of categories" :key="categorie">
        {{ categorie.name }}
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "CategorieView",
  components: {
    NavBar,
  },

  data: function () {
    return { categories: [] };
  },
  created: function () {
    this.displayCategorie();
  },

  methods: {
    displayCategorie() {
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=16339e3d2f16c3253b083ac43d403e38&language=en-US`
      )
        .then((response) => response.json())
        .then((categories) => {
          this.categories = categories.genres;
          console.log(categories);
        })
        .catch((e) => {
          console.error("ERREUR", e);
        });
    },
  },
};
</script>
<style scoped>
.categories {

  flex-wrap: wrap;
  max-width: 1200px;
  font-size: 25px;
  padding: 5px;
  border: 3px solid #ccc;
  border-radius: 25px;
  margin: 0 auto;
  
}
h1 {
  color: white;
}
nav {
  padding: 15px;
}
.box {
  
  text-align: center;
  color: white;
  width: 200px;

}
.resultat {
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
    justify-content: center;
  background-color: #0d0d0d;
  color: white;
  border-radius: 3px;
}
</style>
