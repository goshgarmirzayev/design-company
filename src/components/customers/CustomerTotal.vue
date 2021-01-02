<template>
  <div class="container">
    <div class="row">
					<div class="col">
						<hr class="tall">
					</div>
				</div>
      <div class="row text-center">
        <div class="col">
              <h1>Bizi seçənlər</h1>
          <p>Bizim müştərilərimiz</p>
        </div>
      </div>
    <carousel :dots="true" :autoplay="false" :infinite="false" :nav="false" :items="5" :responsive="responsive">
      <img src="https://ideart.az/img/logos/bna.png" />
      <img src="https://ideart.az/img/logos/Bravo.png" />
      <img src="https://ideart.az/img/logos/Kontakt%20home.png" />
      <img src="https://ideart.az/img/logos/Soliton.png" />
      <img src="https://ideart.az/img/logos/maxi%20az.png" />
      <img src="https://ideart.az/img/logos/Sirab.png" />
      <img src="https://ideart.az/img/logos/azertexnolayn.png" />
      <img src="https://ideart.az/img/logos/kilim.png" />

    </carousel>
    <hr class="tall">
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  created () {
  },
  data () {
    return {
      responsive: {
      0: {
        items: 3,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
      }
    }
    }
  },
  components: {
    carousel,
  },
};
</script>
<style scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  max-height: 70px;
  max-width: 100px!important;
  background: transparent;
  
}


img:hover{
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.tall{
      margin: 44px 0;
}
hr{
      background-image: -webkit-linear-gradient(left, transparent, #DBDBDB, transparent);
    background-image: linear-gradient(to right, transparent, #DBDBDB, transparent);
    border: 0;
    height: 1px;
    margin: 9px 0;
}
</style>