<template>
  <div>
    <NavBar></NavBar>
    <h1>Connexion</h1>
    <div class="home d-flex justify-content-center">
      <div class="resultat"></div>

      <aside class="aside"><DiscoverSlide></DiscoverSlide></aside>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import DiscoverSlide from "@/components/DiscoverSlide.vue";

export default {
  name: "LoginView",
  components: {
    NavBar,
    DiscoverSlide,
  },
};
</script>
<style scoped>
h1 {
  color: white;
}
nav {
  padding: 15px;
}
.home {
  width: 90%;
  margin: 0 auto;
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
</style>
