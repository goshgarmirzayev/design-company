<template>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="row">
          <div class="col-1"><i :class="icon"></i></div>
          <div class="col-11">
            <h4 style="    font-weight: 300;"><strong>{{title}}</strong></h4>
            <div class="row">
              <div class="col-12">
                <p>
                 {{text}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  props: {
    icon: { 
      type: String,
      required: true
    },
    title: { 
      type: String,
      required: true
    },
    text: { 
      type: String,
      required: true
    },

  },
    
}
</script>
<style scoped>
/* *{
    font-weight: 700;
} */

.col-1{
    text-align: end;
}
p{
    color: rgb(119, 119, 119);
    line-height: 24px;
    margin: 0 0 20px;

}

</style>