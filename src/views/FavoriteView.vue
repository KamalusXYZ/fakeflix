<template>
  <div>
    <NavBar></NavBar>
    <h1>Mes favoris</h1>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "FavoriteView",
  components: {
    NavBar,
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
</style>
