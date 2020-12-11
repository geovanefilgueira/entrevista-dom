<template>
    <header>
        <div class="container-main">
            <div class="container-info">
                <img src="../assets/notebook.svg" alt="desenho de um notebook">
            </div>
            <div class="container-cards">
                <div class="menu-cards">

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
    height: 90vh;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.container-main{
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
.container-cards,.container-info{
    width: 49%;
    height: 80vh;
    background: rgb(207, 207, 207);
}
.container-info>img{
    width: 100%;
}
.menu-cards{
    width: 100%;
    height: 7vh;
    background: #c1c1c1;
}
</style>