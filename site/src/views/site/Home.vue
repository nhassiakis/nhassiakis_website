<template>
  <div class="home">
    <img alt="Vue logo" src="../../../public/home-office-336378_1920.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin-top: 10px;
  }
img {
  width: 100%;
  max-height: 1000px;
  height: auto;
  background-size: cover;  
}
  

</style>