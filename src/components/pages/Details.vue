<template>
    <div>
        <Nav/>
        <div class="container-details">
            <div class="w90 box-details">
                <div class="w90 flex-row">
                    <label>Dentre outras</label>
                    <button v-on:click="voltarPainel">Voltar</button>
                </div>
                <h1>DETALHES DO POKEMON </h1>
                <img :src="this.frontSprite" :alt="this.$route.params.name">
                <h3 class="">{{this.$route.params.name}}</h3>
            </div>
        </div>
         
    </div>
</template>

<script>
import Nav from'../parts-layout/Nav.vue'
import axios from 'axios'

export default {
    created: function(){
        console.log(this.$route.params.name);
        axios.get("https://pokeapi.co/api/v2/pokemon/"+this.$route.params.name)
        .then(res=>{
            //console.log(res.data.sprites.front_default)
            this.pokemon=res.data;
            this.frontSprite=res.data.sprites.front_default
        })
    },
    components:{
        Nav
    },
    methods:{
        voltarPainel: function () {
            this.$router.push("/painel")
        }
    },
    data(){
        return{
            pokemon:[],
            frontSprite:String
        }
    }
}
</script>

<style scoped>
.container-details{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
}
.box-details{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    height: 40vh;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 40px 0;
}
</style>