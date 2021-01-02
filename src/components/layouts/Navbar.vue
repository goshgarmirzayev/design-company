<template>
  <div>
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark p-0 fixed-top">
        <div class="container">
          <router-link class="navbar-brand" :to="'/'"
            ><img src="@/assets/img/ideart special ideas agency.jpg" alt="Logo"
          /></router-link>
          <div class="socialmedia-icons nav-item">
            <a href="#"
              ><span class="social-icons i-fb"
                ><i class="fab fa-facebook-f"></i></span
            ></a>
            <a href="#"
              ><span class="social-icons i-ins"
                ><i class="fab fa-instagram"></i></span
            ></a>
            <a href="#"
              ><span class="social-icons i-lin"
                ><i class="fab fa-linkedin-in"></i></span
            ></a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link
                  :to="'/'"
                  v-scroll-to="'#banner'"
                  class="nav-link"
                  href="#"
                >
                  <div class="bordered">ƏSAS SƏHİFƏ</div>
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="'/'"
                  v-scroll-to="'#services'"
                  class="nav-link"
                  href="#"
                  >XİDMƏTLƏRİMİZ</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  :to="'/'"
                  v-scroll-to="'#whyus'"
                  class="nav-link"
                  href="#"
                  >ÜSTÜNLÜKLƏRİMİZ</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  :to="'/'"
                  v-scroll-to="'#partners'"
                  class="nav-link"
                  href="#"
                  >BİZİ SEÇƏNLƏR</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  :to="'/'"
                  v-scroll-to="'#contact'"
                  class="nav-link"
                  href="#"
                  >ƏLAQƏ</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                >
                  <img src="@/assets/img/az-flag.png" /> Azərbaycan
                </a>
                <div
                  class="dropdown-menu"
                  id="dropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/img/ru-flag.png" /> РУССКИЙ</a
                  >
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/img/us-flag.png" /> ENGLISH</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
