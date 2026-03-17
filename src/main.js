

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
//icon fonts 
import '@mdi/font/css/materialdesignicons.css'

// Components


const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
   icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme:{
    defaultTheme:'light',
    themes:{
      light:{
        colors:{
          primary:"#A6AD1E",
          secondary:"#CFD0D6"
        }
      }
    }
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')




// Topic: Vuejs 3 Composables
// 1. https://vuejs.org/guide/reusability/composables.html
// 2. https://www.freecodecamp.org/news/how-vue-composables-work/
// 3. https://alexop.dev/posts/mastering-vue-3-composables-a-comprehensive-style-guide/
// 4. https://medium.com/@venkateshkondi1533/vue-3-composables-for-reusable-logic-916b861b7532