<template>
  <div class="fond">
    <h2>{{ msg }}</h2>
    test bandeau
  </div>
</template>

<script>
export default {
  name: "BandeauCmp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.fond {
  background-color: dimgrey;
}
</style>
