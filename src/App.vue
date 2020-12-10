
<template>
  <div id="app">
    <Nav msg="Welcome to Your Vue.js App"/>
    <Header/>
    <Footer/>
  </div>
</template>

<script> //importação fica aqui
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer'
export default {//state,data,e metodos aqui
  name: 'App',
  components: {//components que vai usar
    Nav,
    Header,
    Footer
  }
}
</script>

<style>
/*Style global e não no escopo*/ 
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
