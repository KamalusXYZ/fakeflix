<template>
  <div>
    <NavBar></NavBar>
    <h1>Ma liste</h1>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "WatchList",
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
