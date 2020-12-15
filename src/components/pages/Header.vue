<template>
    <header>
        <Nav/>
        <div class="w90">
            <h1 class="w90">Feedback Systens Web  -Don Ad</h1>
            <label>Loren ipsun is a tipograpyc of desingner the word</label>
        </div>
        
        <div class="container-main">
            <div class="container-info animate__animated animate__fadeInLeft">
                <img src="../../assets/notebook.svg" alt="desenho de um notebook">
            </div>
            <div class="container-cards cell-w100">
                <div class="menu-cards">
                    <h2>Comentarios sobre a empresa</h2>
                    <div class="flex-row">
                        
                        
                    </div>
                </div>
                <div v-for="cards in comentarios" :key="cards.id">
                    <Cards :comentarios="cards"/>
                </div>
            </div>
        </div>
        <Footer/>
    </header>
</template>

<script>

import Cards from '../Cards'
import Nav from '../parts-layout/Nav.vue'
import Footer from '../parts-layout/Footer.vue'
import DbData from '../../assets/db/databaselocal.js'

export default {
    components: {//components que vai usar
        Cards,
        Nav,
        Footer
        
    },
    data(){
        return{
          comentarios:DbData
        }
    },
    created: function(){
        console.log(DbData)
    }
    
}
</script>

<style scoped>
header{
    width: 100%;
    min-height: 75vh;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.container-main{
    width: 90%;
    min-height:80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
.container-info{
    width: 49%;
    min-height: 65vh;
}
.container-cards{
     width: 49%;
     height: 65vh;
    overflow:auto; 
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