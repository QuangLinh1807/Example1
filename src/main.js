import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import {  ValidationObserver } from 'vee-validate';
import {ValidationProvider}  from 'vee-validate/dist/vee-validate.full.esm'
import rules from './validate'

rules();

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  render: h => h(App),
}).$mount('#app')
