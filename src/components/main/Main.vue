<template>
  <div>
    <Navbar />
    <div class="site-content">
        <banner></banner>
      <service-total></service-total>
      <OurAdvantages />
      <Contact />
      <portfolio-total></portfolio-total>
    </div>

    <Footer />
  </div>
</template>

<script>
require("../../assets/css/aytan-style.css");
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";
import Contact from "../contact/Contact.vue";
import ServiceTotal from "../services/ServiceTotal.vue";
import PortfolioTotal from "../portfolio/PortfolioTotal.vue";
import OurAdvantages from "../advantages/OurAdvantages.vue";
import Banner from '../banner/Banner.vue';
export default {
  components: {
    Navbar,
    Footer,
    Contact,
    ServiceTotal,
    PortfolioTotal,
    OurAdvantages,
    Banner
  },
};
</script>
<style scoped>
.site-content {
  margin-top: 150px;
}
</style>