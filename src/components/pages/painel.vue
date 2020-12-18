<template>
    <div>
        <Nav/>
        <div class="flex-row painel">
            <div class="w50 painel-container">
                <div v-if="OpenMenu" class="box-cadastro" >
                    <div class="content-box-cadastro"><!-- TRANSFORMAR EM UM COMPONENTE -->
                        <div class="w90">
                            <button v-on:click="OpenBoxMenu">Cancelar</button>
                        </div>
                        <h1 class="w90">Cadastro de itens </h1>
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
                            <input type="text" v-model="comentario" required>
                        </div>
                        <div class="flex-column w90">
                            <label>Enviar</label>
                            <button v-on:click="salvarnodb">Salvar Feedback</button>
                        </div>
                    </div>
                    
                </div>
                <div class="w90 box-cadastrados">
                    <div class="flex-row w90">
                        <h1>Cadastrados</h1>
                        <button v-on:click="OpenBoxMenu">Cadastrar Novo</button>
                    </div>
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
                        <label>api externa qualquer com axios</label> 
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
            comentario:'',
            OpenMenu:false
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
        OpenBoxMenu:function(){
            if(this.OpenMenu){
                this.OpenMenu=false;
            }
            else{
                this.OpenMenu=true;
            }
        },
        salvarnodb:function(){
            if(this.comentario===""){
                alert('Comentario vazio')
            }
            else{
                try {
                    this.comentarios.push({
                        id: Date.now(),
                        empresa:this.comentario,
                        comentario:this.comentario,
                        data:Date.now()
                    })
                    alert("Comentario salvo com sucesso!")
                    this.OpenBoxMenu()
                } catch (error) {
                    alert('Ops, algo deu errado'+error)
                }
                
            }
            
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
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.658);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.content-box-cadastro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 480px;
    background: #fff;
    border-radius: 5px;
    padding: 20px 0;
}
.box-cadastrados{
    widows: 100%;
    height: 85vh;
    background:#fff;
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