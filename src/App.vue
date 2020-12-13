
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script> 
export default {
  name: 'App'
  //sem component aqui
}
</script>

<style>/*Style global*/
*{
  margin: 0;
  padding: 0;
  color: #5e5e5e;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
/* ====== CLASSES GLOBAIS====== DESIGN SYSTEN === PADRÃO DE ESTILOS */  
.flex-row{display: flex; flex-direction: row; justify-content:space-between;}
.flex-column{display: flex; flex-direction: column; justify-content:space-between;}
.w90{width: 90%;}
.w30{width: 30%;}
.w50{width: 50%;}
.b12{background: orange;}
h1,h2,h3,h4,h5,h6{padding: 10px 0;}
input[type="text"],select{border: 0; height: 5vh; border-radius: 5px;}
button{cursor: pointer; min-width: 40px; padding: 0 10px; border: 0; height: 5vh; border-radius: 40px; background:#08A7B0; color: #fff; font-size: 0.8; font-weight: 700;}
button:hover{background: darkcyan;}
</style>
