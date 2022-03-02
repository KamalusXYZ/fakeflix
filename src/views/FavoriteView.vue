<template>
  <div>
    <h1>Mes favoris</h1>
    <div class="menu d-flex align-items-center justify-content-around">
      <nav class="menu">
        <router-link to="/"
          ><div class="btn btn-primary m-2 fs-5">Acceuil</div></router-link
        >
        <router-link to="/favoris"
          ><div class="btn btn-primary m-2 fs-5">Favoris</div></router-link
        >
        <router-link to="/a-voir"
          ><div class="btn btn-primary m-2 fs-5">Ma liste</div></router-link
        >
      </nav>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: white;
}
nav {
  padding: 15px;
}
</style>
