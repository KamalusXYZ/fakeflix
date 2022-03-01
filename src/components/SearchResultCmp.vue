<template>
  <div class="result">
    <h2>{{ msg }}</h2>
    <div>Vos resultats de recherche</div>
  </div>
</template>

<script>
export default {
  name: "SearchResultCmp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.result {
  border: 2px solid dimgrey;
  border-radius: 10px;
  padding: 15px;
}
</style>
