<template>
    <div class="container-card"> <!-- PODE SE TRANSFORMAR O CARD EM UM COMPONENTE E PASSAR DADOS VIA PROPS -->
        <div class="w90">
            <div class="flex-row">
                <div>
                    <label>Empresa : </label>
                    <strong>{{comentarios.empresa}}</strong>
                </div>
                <label>{{comentarios.data}}</label>
            </div>
            <label>
                <label v-if="comentarios.comentario.includes('palatrao')">Ops: Comentario improprio</label>
                <label v-else>{{comentarios.comentario}}</label>
                
            </label>
        </div>
    </div>
</template>
<script>
export default {
   
    props:{
        comentarios:Object
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
}
</style>