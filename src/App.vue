<template>
  <div id="app">
    <h2><a href="/">FAKEFLIX</a></h2>
    

    <router-view />
  </div>
</template>


<style >



h2{

font-size: 110px;
text-decoration: none  !important;
letter-spacing: -8px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

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


.menu {
  background: rgb(37, 37, 37);
  min-height: 50px;
  display: flex;
  justify-content: left;
  margin-top: 15px;
}
</style>
