import Vue from 'vue';
import App from './App.vue';

import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';
import Featured from './Components/Featured/index.vue'


import { MdButton,MdDrawer} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton);
Vue.use(MdDrawer);

Vue.component('app-header',Header)
Vue.component('app-footer',Footer)
Vue.component('app-featured', Featured)



new Vue({
    el:'#app',
    render: h => h(App)
});
