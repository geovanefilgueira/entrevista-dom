<template>
    <header>
        <div class="w90">
            <h1 class="w90">Feedback Systens Web  -Don Ad</h1>
            <label>Loren ipsun is a tipograpyc of desingner the word</label>
        </div>
        
        <div class="container-main">
            <div class="container-info animate__animated animate__fadeInLeft">
                <img src="../assets/notebook.svg" alt="desenho de um notebook">
            </div>
            <div class="container-cards cell-w100">
                <div class="menu-cards">
                    <h2>Novo comentario</h2>
                    <div class="flex-row">
                        <div class="flex-column w30">
                            <label>Empresa:</label>
                            <select>
                                <option>Multiseg</option>
                                <option>BHR Seguros</option>
                                <option>TLG consultoria</option>
                            </select>
                        </div>
                        <div class="flex-column w30">
                            <label>Comentario:</label>
                            <input type="text">
                        </div>
                        <div class="flex-column w30">
                            <label>Enviar</label>
                            <button v-on:click="adicionar">Salvar Feedback</button>
                        </div>
                        
                    </div>
                </div>
                <div v-for="cards in comentarios" :key="cards.id">
                    <Cards :comentarios="cards"/>
                </div>
                
                

            </div>
        </div>
    </header>
</template>

<script>
import Cards from './cards'

export default {
    components: {//components que vai usar
        Cards
    },
    data(){
        return{
           comentarios:[
                {   
                    id:'0',
                    empresa:'Multiseg',
                    comentario:'atendente sempre muito cortez e educado, espero que continuem assim. excelentes',
                    data:'10-12-2020'
                },
                {   
                    id:'1',
                    empresa:'BHR Seguros',
                    comentario:'Suporte e desenvolvimento muito eficiente, atendente sempre muito cortez e educado, espero que continuem assim. excelentes',
                    data:'11-12-2020'
                }
                ,
                {   
                    id:'2',
                    empresa:'TLG Consultoria',
                    comentario:'espero que continuem assim. excelentes',
                    data:'11-12-2020'
                },
                {   
                    id:'3',
                    empresa:'TLG Consultoria',
                    comentario:'Bom, Excelente',
                    data:'11-12-2020'
                },
                {   
                    id:'4',
                    empresa:'TLG Consultoria',
                    comentario:'maria falou um palatrao',
                    data:'11-12-2020'
                }

            ]
            
        }
    }
    ,
    props:{
        dados: Array
    },
     methods: {
        adicionar: ()=>{
            this.comentarios.push(
                {
                    id:'8',
                    empresa:'aaa',
                    comentario:'atendente sempre muito cortez e educado, espero que continuem assim. excelentes',
                    data:'10-12-2020'
                }
            ).then(
                console.log("salvo")
            )
        }
     }
}
</script>

<style scoped>
header{
    width: 100%;
    min-height: 90vh;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.container-main{
    width: 90%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
.container-cards,.container-info{
    width: 49%;
    min-height: 80vh;
}
.container-info>img{
    width: 100%;
}
.menu-cards{
    width: 100%;
    padding: 10px 0;
    min-height: 10vh;
    background: #e9e9e9;
}


@media only screen and (max-width: 600px) {
  .container-info{display: none;}
  .cell-w90{width: 90%;}
  .cell-w100{width: 100%;}
  .container-main{flex-direction: column;}
  
}
</style>