<template>
  <div class="container">
    <div class="row text-center">
      <div class="col col-12 mb-5">
        <h1>Reklam Xidmətləri</h1>
      </div>
    </div>
    <div class="col-12">
      <div class="my-row" style="justify-content:">
      <Portfolio v-for=" service in services" :key="service.id" :name="service.nameAZ" :extra="service.extraAZ" :imgPath="service.imgPath" :slug="service.slug"/>
    </div>
    </div>
    <hr>
  </div>
</template>
<script>
import serviceJSON from "../../services.json"
import Portfolio from "./Portfolio.vue";
export default {
  watch: {
  },
  data () {
    return {
      services :[]
    }
  },
  created () {
    this.services=serviceJSON;
    
  },
  components: {
    Portfolio,
  },
};
</script>
<style scoped>
 h1{
   font-weight: 700;
 }
.my-row{
  display: flex;
  flex-wrap: wrap;
}
</style>