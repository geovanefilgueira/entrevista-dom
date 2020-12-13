import Vue from 'vue'
import App from './App.vue'
import Header from './components/pages/Header.vue'
import Nav from'./components/parts-layout/Nav.vue'
import Sobre from './components/pages/Sobre.vue'

import VueRouter from 'vue-router'// importando
Vue.use(VueRouter) // usando 


const router = new VueRouter({ // construindo um novo vuirouter
  routes:[
    {path: '/', component: Header},
    {path: '/login', component: Nav},
    {path: '/sobre', component: Sobre}
    

  ]
})
Vue.config.productionTip = false



new Vue({
  router, // add a rota a instancia
  render: h => h(App),
}).$mount('#app')
