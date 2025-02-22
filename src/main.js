import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Importar Bootstrap y su CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
