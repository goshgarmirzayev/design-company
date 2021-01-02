<template>
  <div>
    <div class="site-content">
      <banner id="banner"></banner>
      <service-total id="services"></service-total>
      <OurAdvantages id="whyus"/>
      <customer-total id="partners"></customer-total>
      <portfolio-total id="portfolio"></portfolio-total>
      <Contact id="contact" />
    </div>
  </div>
</template>

<script>
require("../../assets/css/aytan-style.css");
import Contact from "../contact/Contact.vue";
import ServiceTotal from "../services/ServiceTotal.vue";
import PortfolioTotal from "../portfolio/PortfolioTotal.vue";
import OurAdvantages from "../advantages/OurAdvantages.vue";
import Banner from '../banner/Banner.vue';
import CustomerTotal from '../customers/CustomerTotal.vue';
export default {
  components: {
    Contact,
    ServiceTotal,
    PortfolioTotal,
    OurAdvantages,
    Banner,
    CustomerTotal
  },
};
</script>
<s,
    CustomerTotaltyle scoped>
.site-content {
  margin-top: 150px;
}
</style>