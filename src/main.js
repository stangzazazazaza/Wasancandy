import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from "vuelidate";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import jquery from 'jquery';

import "bootstrap/dist/js/bootstrap.min.js";

require('jquery-ui-dist/jquery-ui')

createApp(App).use(store).use(router).use(VueSweetalert2).use(jquery).use(Vuelidate).mount('#app')
