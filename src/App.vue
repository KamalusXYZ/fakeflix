<template>
  <div id="app">
    <router-view />

    <nav class="menu">
      <router-link to="/">| Home </router-link>
      <router-link to="/favoris">| Favoris </router-link>
      <router-link to="/a-voir">| WatchList </router-link>
    </nav>
  </div>
</template>


<style >
body {
  background-color: #0d0d0d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0d0d0d;
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

.menu {
  background: rgb(37, 37, 37);
  min-height: 50px;
  display: flex;
  justify-content: left;
  margin-top: 15px;
}
</style>
