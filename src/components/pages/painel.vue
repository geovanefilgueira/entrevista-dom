<template>
    <div>

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
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>