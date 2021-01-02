<template>
  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
    <figure
      class="bg_cover image_item"
      style="background-image: url(https://www.uxkiller.com/images/1822.jpg)"
    >
      <div class="hover">
        <i class="fa fa-eye" aria-hidden="true"></i>
      </div>
    </figure>
     <strong><a href="/">sayt.az</a></strong>
  </div>
</template>
<style scoped>
.image_item {
  position: relative;
  /* width: 500px; */
  margin-top: 50px;

}

.bg_cover {
  /* height: 500px; */
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image_item {
  cursor: pointer;
  position: relative;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.image_item * {
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.image_item .hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
}
.image_item .hover i {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  font-size: 34px;
  color: black;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
  transition: all 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.image_item:hover .hover {
  opacity: 1;
}
.image_item:hover .hover i {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
  transition: all 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>