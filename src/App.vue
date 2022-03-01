<template>
  <div id="app">
    <nav>
      <router-link to="/">| Home |</router-link>
      <router-link to="/favoris">| Favoris |</router-link>
      <router-link to="/a-voir">| WatchList |</router-link>
    </nav>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: inherit;
}

nav a.router-link-exact-active {
  color: #d90b1c;
}
</style>
