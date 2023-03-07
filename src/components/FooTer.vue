<template>
  <v-footer
      class="bg-shades-black text-center d-flex flex-column"
  >
    <div>
      <v-btn
          v-for="icon in icons"
          :key="icon.href"
          class="mx-4"
          :icon="icon.name"
          :href="icon.href"
          variant="text"
          target="_blank"
      ></v-btn>
    </div>
    <div class="pt-10">
      University exam project of Man-machine interaction and Web Technologies, for the graphic design I was inspired by the <span class="primary-color">Superprof</span> website.
    </div>
    <v-divider class="pb-5 pt-5"></v-divider>
    <div class="pb-4">
      {{ new Date().getFullYear() }} — <strong>Simone Milanesio</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooTer",
  data() {
    return {
      icons: [
        {
          name: 'mdi-facebook', href: 'https://www.facebook.com/AboutMe91/'
        },
        {
          name: 'mdi-twitter', href: '#'
        },
        {
          name: 'mdi-linkedin', href: 'https://www.linkedin.com/in/simone-milanesio-917753182/'
        },
        {
          name: 'mdi-instagram', href: 'https://www.instagram.com/simo_milanesio/'
        },
      ],
    }
  }
}
</script>
