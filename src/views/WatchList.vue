<template>
  <div>
    <NavBar></NavBar>
     <DiscoverSlide></DiscoverSlide>

    <h1>Ma liste</h1>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import DiscoverSlide from "@/components/DiscoverSlide.vue";

export default {
  name: "WatchList",
  components: {
    NavBar,
    DiscoverSlide
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
