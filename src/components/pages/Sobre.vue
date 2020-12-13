<template>
    <div class="sobre">
        <Nav/>
        <div class="card-sobre">
            <h1 class="w90">What is Lorem Ipsum?</h1>
            <label class="w90">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </label>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Nav from '../parts-layout/Nav.vue'
import Footer from  '../parts-layout/Footer.vue'

export default {
    components:{
        Nav,
        Footer,
        
    }
}
</script>

<style scoped>
.sobre{
    width: 100%;
    min-height: 105vh;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
.card-sobre{ 
    width: 80%; 
    min-height: 40vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(70, 70, 70, 0.164);
    border-radius: 5px;
    }
</style>