<template>
    <div class="container">
        <div class="row text-center">
      <div class="col col-12">
        <h1>PORTFOLIO</h1>
        <strong
          ><strong>
            <p class="custom-section-sub-title">...</p>
          </strong></strong
        >
      </div>
    </div>
        <div class="row">
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
        </div>
    </div>
</template>
<script>
import Portfolio from "./Portfolio.vue"
export default {
    components:{
        Portfolio
    }
}
</script>