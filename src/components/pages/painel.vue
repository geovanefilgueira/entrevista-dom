<template>
    <div>
        <Nav/>
        <div class="flex-row painel">
            <div class="w50 painel-container">
                <div class="w90 box-cadastro">
                    <h1 class="w90">Cadastrando itens local</h1>
                    <label class="w90">Painel home, publico, em construção</label>
                    <div class="flex-column w90">
                        <label>Empresa:</label>
                        <select>
                            <option>Multiseg</option>
                            <option>BHR Seguros</option>
                            <option>TLG consultoria</option>
                        </select>
                    </div>
                    <div class="flex-column w90">
                        <label>Comentario:</label>
                        <input type="text" v-model="comentario">
                        {{comentario}}
                    </div>
                    <div class="flex-column w90">
                        <label>Enviar</label>
                        <button v-on:click="salvarnodb">Salvar Feedback</button>
                    </div>
                </div>
                <div class="w90 box-cadastrados">
                        <h1 class="w90">Cadastrados</h1>
                        <label class="w90"> recuperar data de arquivo local, e dar push no arry com novos itens, construir de manha cedo </label> 
                        <div v-for="cards in comentarios" :key="cards.id" class="w90">
                            <Cards :comentarios="cards"/>
                        </div>
                </div>
            </div>
            <div class="w50 painel-container">
                <div class="w90">
                    <div class="box-info-api">
                        <h1 class="w90">Consumindo uma api</h1>
                        Consumindo uma api externa qualquer
                    </div>
                    <div class="box-listagem-api">
                        <div v-for="(poke,index) in pokemons" :key="index" class="w90">
                            <CardPokem :pokemons="poke"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Nav from '../parts-layout/Nav.vue'
import Footer from '../parts-layout/Footer.vue'
import Cards from '../Cards.vue'
import CardPokem from '../Card-Api'
import axios from 'axios'
import DbData from '../../assets/db/databaselocal'

export default {
    name:'painel',
    components:{
        Nav,
        Footer,
        CardPokem,
        Cards
    },
    data(){
        return{
            pokemons:[],
            comentarios:DbData,
            comentario:''
        }
    },
    created: function(){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(res=>{
            //console.log(res.data.results)
            this.pokemons=res.data.results
        })
    },
    methods:{
        salvarnodb:function(){
            this.comentarios.push({
                 id: Date.now(),
                 empresa:'teste',
                 comentario:this.comentario,
                 data:Date.now()
            })
        }
    }
}
</script>
<style scoped>
.painel{
    width: 100%;
    min-height:85vh;
    background: #eeeeee;
}
.painel-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.box-cadastro{
    background: rgba(70, 70, 70, 0.164);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 40vh;
}
.box-cadastrados{
    widows: 100%;
    height: 45vh;
    background: rgba(70, 70, 70, 0.164);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow:auto; 
}
.box-info-api{
    width: 100%;
    height: 10vh;
}
.box-listagem-api{
    padding:0;
    width: 100%;
    height: 75vh;
    overflow:auto; 
}
@media only screen and (max-width: 600px) {
  .painel{flex-direction: column;}
  .painel-container{width: 100%;}
}
</style>