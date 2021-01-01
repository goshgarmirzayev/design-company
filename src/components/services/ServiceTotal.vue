<template>
  <div class="container">
    <div class="row text-center">
      <div class="col col-12">
        <h1>Reklam Xidmətləri</h1>
        <strong
          ><strong>
            <p class="custom-section-sub-title">...</p>
          </strong></strong
        >
      </div>
    </div>
    <div class="row">
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </div>
  </div>
</template>
<script>
import Service from "./Service.vue";
export default {
  components: {
    Service,
  },
};
</script>
<style scoped>
 h1{
   font-weight: 700;
 }

</style>