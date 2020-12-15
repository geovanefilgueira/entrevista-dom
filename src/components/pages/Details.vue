<template>
    <div>
        <Nav/>
         <h1>
             DETALHES DO POKEMON
         </h1>
         <label>criar rota com params,pegar via url</label>
    </div>
   
</template>

<script>
import Nav from'../parts-layout/Nav.vue'

export default {
    created: function(){
        //console.log(this.$route.params.urld);
    },
    components:{
        Nav
    }
}
</script>

<style scoped>

</style>