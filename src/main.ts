import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import Tres from '@tresjs/core'
import JsonExcel from 'vue-json-excel3'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi'
    },
    components,
    directives
})

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(Tres)
app.component("downloadExcel", JsonExcel)

app.mount('#app')