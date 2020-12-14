import Vue from 'vue'
import App from './App.vue'
import Header from './components/pages/Header.vue'
import Sobre from './components/pages/Sobre.vue'
import Login from './components/pages/Login.vue'
import Painel from'./components/pages/Painel.vue'


import VueRouter from 'vue-router'// importando
Vue.use(VueRouter) // usando 


const router = new VueRouter({ // construindo um novo vuirouter
  routes:[
    {path: '/', component: Header},
    {path: '/login', component: Login},
    {path: '/sobre', component: Sobre},
    {path: '/painel', component: Painel}
  

  ]
})
Vue.config.productionTip = false

new Vue({
  router, // add a rota a instancia
  render: h => h(App),
}).$mount('#app')
