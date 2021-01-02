<template>
  <div id="app">
    <Navbar/>
    <br>
    <br>
    <br>
    <br>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
require("./assets/css/carousel-customization.css");
import Footer from './components/layouts/Footer.vue'
import Navbar from './components/layouts/Navbar.vue'

export default {
  components: { Navbar, Footer },
  name: 'App',
}
</script>
