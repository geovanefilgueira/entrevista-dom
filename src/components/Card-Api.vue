<template>
    <div class="container-card">
        <div class="w90">
            <div class="flex-row">
                <div>
                    <h3>Nome: {{this.pokemons.name}} </h3>
                </div>
                <router-link :to="'/details/'+parametronome" >
                    Mais Detalhes:
                </router-link>
                
            </div>
            <label >
                {{this.pokemons.url}}
            </label>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            parametronome:this.pokemons.name
        }
    },
    props:{
        pokemons:Object
    },
    methods:{
        
    }

}
</script>
<style scoped>
.container-card{
    width: 100%;
    height: 10vh;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    color: #6b6b6b;
    cursor: pointer;
}
</style>