<template>
    <header>
        <div class="w90">
            <h1 class="w90">Feedback Systens Web  -Don Ad</h1>
            <label>Loren ipsun is a tipograpyc of desingner the word</label>
        </div>
        
        <div class="container-main">
            <div class="container-info">
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
                            <button>Salvar Feedback</button>
                        </div>
                        
                    </div>
                </div>

                <div class="container-card"> <!-- PODE SE TRANSFORMAR O CARD EM UM COMPONENTE E PASSAR DADOS VIA PROPS -->
                    <div class="w90">
                        <div class="flex-row">
                            <div>
                                <label>Empresa: </label>
                                <strong>Multiseg</strong>
                            </div>
                            <label>Data: 11-12-2020</label>
                        </div>
                        <label>
                            Suporte e desenvolvimento muito eficiente, atendente sempre muito cortez e educado, espero que continuem assim. excelentes
                        </label>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    
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
    height: 80vh;
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
}

@media only screen and (max-width: 600px) {
  .container-info{display: none;}
  .cell-w90{width: 90%;}
  .cell-w100{width: 100%;}
  .container-main{flex-direction: column;}
  
}
</style>