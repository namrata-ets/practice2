import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": "example-of-custom-header",
    "Access-Control-Allow-Origin" :"*"
  };

  axios.defaults.headers.post['xsrfCookieName'] = 'CSRFToken';
  axios.defaults.headers.post['xsrfHeaderName'] = 'X-CSRFToken';
  axios.defaults.headers.post['responseType'] = 'json';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
