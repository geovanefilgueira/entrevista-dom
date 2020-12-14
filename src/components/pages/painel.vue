<template>
    <div>
        <Nav/>
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
        <Footer/>
    </div>
</template>
<script>
import Nav from '../parts-layout/Nav.vue'
import Footer from '../parts-layout/Footer.vue'
export default {
    components:{
        Nav,
        Footer
    }
}
</script>
<style scoped>

</style>