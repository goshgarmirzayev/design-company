<template>
  <div class="banner-total">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="row text-center">
               <div class="col">
                      <h1 class="together" style="font-size: 30px;display:inline-flex; font-weight:400">Biz &nbsp;
                <textra
                  :data="words"
                  :timer="3.1"
                  :infinite="true"
                  filter="left-right"
                />
               </h1>
               </div>
        
          <h1>
            <p class="lead">
              <strong
                style="
                  font-style: italic;
                  font-family: 'Shadows Into Light', cursive;
                  font-size: 1.6em;
                "
                class="font-main"
                >Ideart reklam agentliyi</strong
              >
              geniş spektrlı reklam xidmətlərini təqdim edir. 2018 – ci ildən
              etibarən Azərbaycanın reklam bazarına daxil olmaqla biz qısa
              müddətdə bir çox şirkət və dövlət qurumları ilə əməkdaşlıq etməyə
              başlayıb və böyük nailiyyətlər əldə edib. İdeart reklam agentliyi
              sizin sorğunuza uyğun həm ənənəvi marketinq (çöl reklamları,
              daxili reklamları, çap xidmətlərini, promo, media xidmətlətini, PR
              və s.), həm də rəqəmsal (digital) marketinq xidmətlərini (SMM
              xidməti, SEO xidməti, Google reklamlar) digər reklam işlərini
              təklif edir. Bununla yanaşı sizin şirkətinizin simasını yaratmaq
              üçün veb-saytların yaradılması və dizayn xidmətləri mövcuddur. .
            </p>
          </h1>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      words: [
        "təcrübəliyik.",
        "kreativik.",
        "proqressivik",
      ],
    };
  },
};
</script>
<style scoped>
.lead {
  line-height: 1.8rem;
  font-size: 20px;
  color: rgb(119, 119, 119);
}

.font-main {
  color: #000000;
}
.banner-total {
  background: #f4f4f4;
  border-top: 5px solid #f1f1f1;
  margin: 30px 0;
  padding: 50px 0;
}
.textra{
    margin-left: 10px;
    background:  #FF1493;
    padding:10px 10px 10px 10px;
    color:white;
}
.together{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>