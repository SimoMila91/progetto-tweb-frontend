<template>
  <swiper
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>
      <v-card elevation="20" class="d-flex flex-column text-center position-relative w-100 h-100">
        <div class="d-flex justify-center pt-4 pb-4 img-background">
          <div class="border-img rounded-circle">
            <img src="../../assets/teachers/grenbo2.jpeg" width="100" height="100" class="rounded-circle">
          </div>
        </div>
        <div style="background-color: #ff6363">
          <div class="d-flex flex-column align-center bg-white" style="border-top-right-radius: 30px">
            <v-rating
                v-model=rating
                readonly
                size="small"
                class="pt-3"
            ></v-rating>
            <span class="pt-2">Grenbaud</span>
            <span class="pa-3" style="color: grey; font-size: 0.9rem">lorema aji aksajkad  kajda  j ja
              fduafdajf dakjajsfjoafjaosofaooofa f afalfj alfjaf a
              afinas fsjofasoaojsa
            </span>
          </div>
        </div>
      </v-card>
    </swiper-slide>
    <swiper-slide>
      <v-card elevation="20" class="d-flex flex-column text-center position-relative w-100 h-100">
        <div class="d-flex justify-center pt-4 pb-4 img-background">
          <div class="border-img rounded-circle">
            <img src="../../assets/teachers/grenbo2.jpeg" width="100" height="100" class="rounded-circle">
          </div>
        </div>
        <div style="background-color: #ff6363">
          <div class="d-flex flex-column align-center bg-white" style="border-top-right-radius: 30px">
            <v-rating
                v-model=rating
                readonly
                size="small"
                class="pt-3"
            ></v-rating>
            <span class="pt-2">Grenbaud</span>
            <span class="pa-3" style="color: grey; font-size: 0.9rem">lorema aji aksajkad  kajda  j ja
              fduafdajf dakjajsfjoafjaosofaooofa f afalfj alfjaf a
              afinas fsjofasoaojsa
            </span>
          </div>
        </div>
      </v-card>
    </swiper-slide>
    <swiper-slide>
      <v-card elevation="20" class="d-flex flex-column text-center position-relative w-100 h-100">
        <div class="d-flex justify-center pt-4 pb-4 img-background">
          <div class="border-img rounded-circle">
            <img src="../../assets/teachers/grenbo2.jpeg" width="100" height="100" class="rounded-circle">
          </div>
        </div>
        <div style="background-color: #ff6363">
          <div class="d-flex flex-column align-center bg-white" style="border-top-right-radius: 30px">
            <v-rating
                v-model=rating
                readonly
                size="small"
                class="pt-3"
            ></v-rating>
            <span class="pt-2">Grenbaud</span>
            <span class="pa-3" style="color: grey; font-size: 0.9rem">lorema aji aksajkad  kajda  j ja
              fduafdajf dakjajsfjoafjaosofaooofa f afalfj alfjaf a
              afinas fsjofasoaojsa
            </span>
          </div>
        </div>
      </v-card>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import {Autoplay, EffectCube, Pagination} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination, Autoplay],
    };
  },
  data() {
    return {
      rating: 5,
    }
  }
};
</script>
<style scoped>
.swiper {
  width: 300px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -150px;
  margin-top: -150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  border: 4px solid #ff6363;
}

.img-background {
  background-color: #ff6363;
  border-bottom-left-radius: 20px;
}

.border-img {
  border: 4px solid #ffffff;
  height: 108px;

}

@media(max-width: 960px) {
  .swiper {
    position: inherit;
    margin: 10% auto;
    top: unset;
    left: unset;
  }
}

</style>