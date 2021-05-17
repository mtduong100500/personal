import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/index.css';
import './assets/css/table.css';
import './assets/css/sidebar.css';
import './assets/css/header.css';
import './assets/css/subheading.css';
import './assets/css/toolbar.css';
import './assets/css/footer.css';
import './assets/css/form.css';
import './assets/css/fonts.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



