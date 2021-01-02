<template>
<div class="whyme">
    <div class="container">
      <div class="row text-center">
          <div class=" col col-12">
              <h1 >Üstünlüklərimiz</h1>
          </div>
      </div>
    <div class="row">
      <Advantage
        :title="'Strategiya'"
        :icon="'fa fa-users'"
        :text="'İdeart reklam agentliyinin əsas strategiyamız müştərilərin biznesinin hərtərəfli ətraflı təhlilidir. Vəzifəmiz - maksimum dərəcədə reklam işlərimizlə səmərəli şəkildə sizi bazarda tanıtmaq və bunun üçün orijinal imic qurmaqdır. Hədəflərinizə çatmaq üçün, sorğunuzdan asılı olaraq,reklam işlərimizdə biz bir marketinq strategiyasını qururuq və resurslarımızı istifadə edərək bir reklam kampaniyasını hazırlayırıq. Qurulan reklam kampaniyadan sonra biz gördüyümüz strategiyanı analiz edirik və ətraflı şəkildə müştərilərimizə təhvil veririk.'"
      />
      <Advantage
        :icon="'fa fa-film'"
        title="Maraq"
        :text="'Müştərilərimizin biznesini öz biznesimiz kimi qiymətləndiririk. İxtisasdan, auditoriyadan, məqsəddən asılı olmayaraq, biz onların inkişafı üçün kömək etməyə hazırıq. Çöl reklamı, radio və televiziya reklamı, rəqəmsal marketinq, veb-saytın ya da dizaynın hazırlanması, bütün bu reklam xidmətlərimiz sizin brendinizi təşviq etməkdə kömək edəcək.'"
      />
      <Advantage
        :icon="'fa fa-check'"
        title="Xidmət"
        :text="'İdeart reklam agentliyi olaraq Müştərilərimizə təqdim etdiyimiz keyfiyyətli reklam xidmətləri,və reklam işləri, prosesini müşahidə etmək, reklam strategiyasını təhlil etmək və inkişaf etdirməkdən tutmuş hesabatların verilməsindən ibarətdir. Sorğudan asılı olmayaraq gördüyümüz hər bir reklam işinə nəzarət edir və keyfiyyətli şəkildə müştərimizə çatdırmaq istəyirik.'"
      />
      <Advantage
      :icon="'fa fa-file'"
      :title="'Məsuliyyət'"
      :text="'Akkaunt menecerlərimiz sifarişinizdən asılı olaraq istənilən məqsədə nail olmağınıza nəzarət edirlər. Biz komanda işinə çox böyük üstünlük veririk və brendinizi bazarda reallaşdırmaq üçün menecerlərimiz, videoqraflarımız, dizaynerlərimiz, kopirayterlərimiz və digər üzvlər hər yeni reklam işinə və marketinq strategiyasına böyük məsuliyyətlə yanaşırlar.'"
      />
    </div>
  </div>
</div>
  
</template>
<script>
import Advantage from "./Advantage.vue";
export default {
  components: {
    Advantage,
  },
};
</script>
<style scoped>
.col-2 {
  text-align: end;
}
.whyme{
        background: #f4f4f4;
    border-top: 5px solid #f1f1f1;
    margin: 30px 0;
    padding: 50px 0;
}
h1{
    font-weight: 700;
    margin-bottom: 32px!important;
}
</style>