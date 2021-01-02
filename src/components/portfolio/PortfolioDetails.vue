<template>
    <div>
       <div class="container">
         <div class="row text-center" style="justify-content:center">
           <div class=" col col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <carousel :navText="navText" :items="1"> 
         <img src="https://ideart.az/img/projects/friday.jpg" alt="">
         <img src="https://ideart.az/img/projects/friday.jpg" alt="">

         <img src="https://ideart.az/img/projects/friday.jpg" alt="">

         <img src="https://ideart.az/img/projects/friday.jpg" alt="">

         <img src="https://ideart.az/img/projects/friday.jpg" alt="">

         <img src="https://ideart.az/img/projects/friday.jpg" alt="">

        </carousel>
           </div>
         </div>
       </div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  created () {
      console.log(this.$route.params.slug);
  },
 components:{
carousel
 },
  data () {
    return {
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>']
    }
  },
    
}
</script>
<style scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  
}


img:hover{
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
</style>