<template>
  <v-container class="position-relative homepage-cont back-pink pad-1-cont" :class="[mobile ? 'text-center mobile-homepage-cont' : '']" fluid>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12">
            <h1 class="w-700 title-style h1-text mb-6" style="color: #000">
              Trova<br/>l'insegnante<br v-if="!mobile"/> ideale
            </h1>
            <p v-show="!mobile" class="w-700 h5-text mb-5">Online o anche ollain<br/>scegli tra <span class="primary-color">22 milaquadritriliardi di insegnanti</span>
            </p>
          </v-col>
          <v-col cols="12">
            <SearchBar />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-cont-first-img position-relative" style="display: initial;" v-bind:class="{'text-center pt-10': mobile}" cols="12" md="6">
        <p v-show="mobile" class="w-700 h5-text mb-10">Online o in presenziale<br/>scegli tra <span class="primary-color">22 milamilioni di insegnanti</span>
        </p>
        <div class="overflow-hidden pr-0" :style="!mobile ? 'position: absolute; z-index: 1;' : ''">
          <div>
            <ul class="d-flex f-img-cont" :class="[mobile ? 'justify-center' : '']">
              <li class="position-relative">
                <img src="../../assets/teachers/grenbo.webp" class="first-img"  alt=""/>
                <div class="position-absolute d-flex flex-column mini-card text-center">
                  <span style="font-size: 0.9rem" class="w-600">Grenbaud</span>
                  <span style="font-size: 0.6rem" class="mt-2 mb-2">Insegnante di<br /> fisica quantistica</span>
                  <v-rating
                      v-model="rating2"
                      class="mb-3"
                      color="white"
                      active-color="yellow-darken-3"
                      half-increments
                      hover
                      readonly
                      size="16"
                  ></v-rating>
                </div>
              </li>
              <li class="position-relative t-80">
                <img src="../../assets/teachers/kokeshi.jpg" class="first-img"  alt=""/>
                <div class="position-absolute d-flex flex-column mini-card text-center">
                  <span style="font-size: 0.9rem" class="w-600">Kokeshi</span>
                  <span style="font-size: 0.6rem" class="mt-2 mb-2">Insegnante di<br /> pissicologia</span>
                  <v-rating
                      v-model="rating2"
                      class="mb-3"
                      color="white"
                      active-color="yellow-darken-3"
                      half-increments
                      hover
                      readonly
                      size="16"
                  ></v-rating>
                </div>
              </li>
              <li class="position-relative" :style="mobile ? 'margin-right: 0 !important' : ''">
                <img src="../../assets/teachers/dipre.jpeg" class="first-img"  alt=""/>
                <div class="position-absolute d-flex flex-column mini-card text-center">
                  <span style="font-size: 0.9rem" class="w-600">Diprè</span>
                  <span style="font-size: 0.6rem" class="mt-2 mb-2">Insegnante di<br />chimica inorganica</span>
                  <v-rating
                      v-model="rating2"
                      class="mb-3"
                      color="white"
                      active-color="yellow-darken-3"
                      half-increments
                      hover
                      readonly
                      size="16"
                  ></v-rating>
                </div>
              </li>
              <li v-show="!mobile" class="position-relative t-80">
                <img src="../../assets/teachers/masseo.jpg" class="first-img"  alt=""/>
                <div class="position-absolute d-flex flex-column mini-card text-center">
                  <span style="font-size: 0.9rem" class="w-600">Masseo</span>
                  <span style="font-size: 0.6rem" class="mt-2 mb-2">Insegnante di<br />teologia</span>
                  <v-rating
                      v-model="rating2"
                      class="mb-3"
                      color="white"
                      active-color="yellow-darken-3"
                      half-increments
                      hover
                      readonly
                      size="16"
                  ></v-rating>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
    <v-container class="homepage-cont position-relative second-container" :class="!mobile ? 'back-pink polygone' : 'bg-white text-center '" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="6" style="z-index: 2" class="d-flex align-center">
          <div class="d-flex flex-column" style="width: inherit">
            <div class="pb-6">
              <div>
                <v-rating
                    v-model="rating"
                    :item-labels="labels"
                    readonly
                >
                  <template v-slot:item-label="props">
                    <span
                        class="font-weight-black text-caption"
                        :class="`text-${colors[props.index]}`"
                    >
                      {{ props.label }}
                    </span>
                  </template>
                </v-rating>
              </div>
              <h2 class="h2-text" style="line-height: 1.2">Insegnanti poco<br/> certificati e stellati</h2>
            </div>
            <div class="pb-6">
              <h6 class="h6-text"><span class="primary-color">Meno di 10 allievi</span> hanno lasciato un voto a<br />
                <span class="primary-color">5 stelle</span> al loro insegnante
              </h6>
            </div>
            <div>
              <v-btn variant="flat" size="x-large" class="btn-color-style" rounded="pill" >Cerca un insegnante</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="position-relative">
          <CarouselTeachers />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import '@/assets/css/main.css'
import image from '@/assets/teachers/unnamed.jpg'
import SearchBar from "@/components/SearchBar.vue";
import t1 from '@/assets/teachers/wp5602435-teacher-anime-wallpapers.jpg';
import CarouselTeachers from "@/components/homepageComponents/CarouselTeachers.vue";

  export default {
    name: "HomePage",
    props: ['isSticky'],
    inheritAttrs: false,
    components: {
      CarouselTeachers,
      SearchBar,
    },
    data() {
      return {
        mobile: null,
        image: image,
        t1: t1,
        rating: 1,
        colors: ['red', 'orange', 'grey', 'cyan', 'green'],
        labels: ['bad', 'so so', 'ok', 'good', 'great'],
        rating2: 5,
      }
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    methods: {
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 962) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.drawer = false;
      }
    }
  }
</script>

<style scoped>
  .col-cont-first-img {

  }

  .t-80 {
    top: 80px;
  }

  .back-pink {
    background-color: #fff1f1;
  }

  .pad-1-cont {
    padding-top: 13% !important;
  }

  .homepage-cont {
    padding: 15% 0 23% 10%;
  }
  .mobile-homepage-cont {
    border-radius: 0  0 50px 50px;
    padding-right: 10% !important;
  }

  .second-container {
    padding-left: 20%;
    padding-right: 10%;
    padding-bottom: 20% !important;
    background-color: #fff1f1;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), color-stop(95%, #ffffff));
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff 95%);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff 95%);
  }
  .primary-color {
    color: #ff6363;
  }

  .title-style {
    line-height: 1.1;
  }

  .title-mr {
    margin-right: 200px;
  }

  .f-img-cont {
    padding-bottom: 100px;
  }

  .f-img-cont li {
    height: 640px;
    width: 160px;
    background-color: #fff1f1;
    border-radius: 90px;
    list-style: none;
  }

  .f-img-cont li:not(:last-child) {
    margin-right: calc(8px * 3);
  }

  .first-img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 90px;
  }

  .mini-card {
    background-color: #ffffff;
    top: 73%;
    left: 50%;
    transform: translateX(-50%);
    padding:  10px;
    border-radius:  20px;
  }

  .img-card-style {
    border-radius: 100%;
  }

  .polygone {
    background-image: url("@/assets/teachers/Simple Shiny.svg");
    background-size: contain;
  }

  @media(max-width: 1430px) {
    .title-mr {
      margin-right: 100px;
    }
  }

  @media(max-width: 1270px) {
    .title-mr {
      margin-right: 50px;
    }

    .second-container {
      padding-left: 10%;
    }
  }

  @media(max-width: 1120px) {
    .second-container {
      padding-right: 5%;
      padding-left: 5%;
    }

    .homepage-cont {
      padding-left: 5%;
    }
  }


  @media(max-width: 960px) {
      .homepage-cont {
        padding-bottom: 10%;
        padding-left: 10%;
      }
  }

  @media(max-width: 600px) {
    .first-img {
      width: 130px;
      height: 450px;
    }

    .f-img-cont {
      padding-bottom: 46px;
    }
  }

  @media(max-width: 500px) {
    .homepage-cont {
      padding-right: 5% !important;
      padding-left: 5% !important;
    }

    .first-img {
      width: 97px;
      height: 400px;
    }
  }
</style>