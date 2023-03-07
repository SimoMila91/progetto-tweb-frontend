<template>
  <v-app id="app">
    <NavBar :isSticky="isSticky" />
    <div id="content">
      <router-view :isSticky="isSticky" :mobile="mobile" />
    </div>
    <div v-show="mobile && isSticky" class="search-bar-sticki-mb">
      <SearchBar :is-sticky="isSticky" :mobile="mobile" />
    </div>
    <FooTer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooTer from "@/components/FooTer.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: 'App',
  components: {
    SearchBar,
    FooTer,
    NavBar,
  },
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      isSticky: null,
      scrollPosition: 0,
      mobile: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll);
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 620 && !this.mobile) {
        this.isSticky = true;
      } else this.isSticky = !!(this.mobile && this.scrollPosition > 350);
    },
    checkScreen() {
      this.windowWidth = innerWidth;
      if (this.windowWidth <= 962) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    }
  }
}
</script>

<style>

html, body {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background-color: #fff;
}

.search-bar-sticki-mb {
  padding: 8%;
  position: fixed;
  bottom: 2%;
  z-index: 2;
  width: 100%;
}

</style>
