<template>
  <v-container class="pa-0" :class="{'sticky-appbar': isSticky }" fluid>
    <div class="container" v-bind:style="[isSticky ? 'background-color: #fff;    border-radius: 0 0 25px 25px; ' : 'background-color: #fff1f1' ]">
      <div class="logo">
        <router-link to="/" class="router-link-style">
          <span>needed</span>
        </router-link>
      </div>
      <div v-show="isSticky && !mobile" class="ml-6" style="z-index: 1; width: 300px">
        <SearchBar :isSticky="isSticky" :mobile="mobile" />
      </div>
      <div class="btn-container">
        <v-btn-group v-show="!mobile" style="align-items: center">
          <v-btn
              icon="mdi-help-circle-outline"
              class="ml-3 btn-style"
              :class="[isSticky ? 'back-grey' : '']"
              rounded="pill"
              size="small"
          ></v-btn>
          <v-btn class="ml-3 btn-style text-capitalize" :class="[isSticky ? 'back-grey' : '']" rounded="pill" size="small">
            Scarica App
          </v-btn>
          <v-btn class="ml-3 btn-style text-capitalize" :class="[isSticky ? 'back-grey' : '']" rounded="pill" size="small"
            @click="loginDialog = true"
          >
            Accedi
          </v-btn>
        </v-btn-group>
        <div>
          <v-icon
              @click="closeDialogMobile"
              v-show="mobile"
              class="toggleUpDown"
              :class="{ 'rotate': mobileNav }"
          >
            mdi-menu
          </v-icon>
        </div>
      </div>
    </div>
  </v-container>

  <!-- Login Form  -->
  <v-row justify="center">
    <v-dialog
        v-model="loginDialog"
        width="auto"
    >
      <v-card class="text-center pa-10">
        <h5 class="h5-text pb-10">Connettiti</h5>
        <v-form fast-fail @submit.prevent>
          <LoginUser />
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>


  <!-- Dialog menu mobile -->
  <v-dialog
      fullscreen
      style="height: 100%"
      v-model="drawer"
      transition="dialog-top-transition"
  >
    <div class="width_full h-100 bg-white pa-6 position-relative">
      <div class="position-absolute" style="right: 20px; top: 20px;">
        <v-icon
          @click="closeDialogMobile"
          class="btn-mobile-colored close-x-style"
        >
          mdi-close
        </v-icon>
      </div>
      <div class="d-flex flex-column pt-15">
        <v-btn
            rounded="pill"
            class="btn-mobile-colored text-capitalize font-weight-bold mb-4"
            @click="loginDialog = true"
        >
          Accedi
        </v-btn>
        <v-btn
            rounded="pill"
            class="text-capitalize font-weight-bold"
        >
          Registrati
        </v-btn>
      </div>
      <v-divider class="mt-10 mb-10" style="opacity: 0.1" />
      <div class="d-flex flex-column pl-6 pr-6 list-menu-cont">
        <ul>
          <li><v-icon size="large">mdi-download-circle-outline</v-icon><span class="ml-3">Scarica App</span></li>
          <li><v-icon size="large">mdi-help-circle-outline</v-icon><span class="ml-3">Aiuto</span></li>
        </ul>
      </div>
    </div>
  </v-dialog>

</template>

<!--
  if not logged show something otherwise favorites etc. REMEMBER
 -->

<script>

import SearchBar from "@/components/SearchBar.vue";
import '../assets/css/main.css'
import LoginUser from "@/components/userAccess/LoginUser.vue";

export default {
  name: "NavBar",
  components: {LoginUser, SearchBar},
  props: ['isSticky'],
  data() {
    return {
      mobile: null,
      windowWidth: null,
      drawer: null,
      mobileNav: false,
      loginDialog: true, // change in null important,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeDialogMobile() {
      this.toggleMobileNav();
      this.drawer = !this.drawer;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 962) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.drawer = false;
      return;
    },
  }
}
</script>

<style scoped>
  .back-grey {
    background-color: #f7f7f7;
  }

  .container {
    width: 100%;
    display: flex;
    height: 90px;
    align-items: center;
  }

  .sticky-appbar {
    position: fixed;
    top: 0;
    z-index: 100000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 24px;
  }

  .logo {
    margin-left: 20px;
    color: #ff6363;
    font-size: 1.7rem;
    font-weight: bolder;
  }

  .toggleUpDown {
    transition: transform .5s ease-in-out !important;
  }

  .toggleUpDown.rotate {
    transform: rotate(180deg);
    animation-delay: 1s;
  }

  .btn-container {
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-between;
  }

  .btn-style {
    height: 40px !important;
    font-weight: bold;
    transition: .3s all;
  }

  .btn-style:hover {
    background-color: #ff6363 !important;
    color: #fff !important;
    transform: scale(1.025) perspective(1px);
  }

  .btn-mobile-colored {
    background-color: #ff6363 !important;
    color: #fff !important;
  }

  .router-link-style {
    text-decoration: none;
    color: inherit;
  }

  .close-x-style {
    border-radius: 50%;
    padding: 20px;
    font-size: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  .close-x-style:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .list-menu-cont ul {
    list-style: none;
  }
  .list-menu-cont li {
    margin-bottom: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

</style>