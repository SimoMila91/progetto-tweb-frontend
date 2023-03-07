import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from "vuetify/directives";

// Motion

import { MotionPlugin } from "@vueuse/motion";
import VueSmoothScroll from 'vue3-smooth-scroll'

import router from "@/router";


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .use(MotionPlugin)
    .use(VueSmoothScroll, {
        duration: 900,
        updateHistory: false,
        offset: 0,
    }).mount('#app')
