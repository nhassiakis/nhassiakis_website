<template>
  <div id="app">
    <div id="nav nav-bar">
      <div class="buttons">
      <button><router-link to="/">Home</router-link></button> |
      <button><router-link to="/about">About</router-link></button> | 
      <button><router-link to="/contact">Contact</router-link></button>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
