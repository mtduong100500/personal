import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
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
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



