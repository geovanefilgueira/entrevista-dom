<template>
    <div class="login">
        <Nav/>
        <div class="login-card">
            <div class="flex-row">
                <div class="box-login">
                    <h1>Login</h1>
                    <form class="">
                        <strong class="w90">Usuario:</strong>
                        <input type="text" class="w90" required>
                        <strong class="w90"> Senha:</strong>
                        <input type="text" class="w90" required>
                        <div class="w90">
                            <input type="checkbox" required>
                            <label>Aceito os termos de uso</label>
                        </div>
                        <input type="submit" class="w90 b12" value="Entrar">
                    </form>
                </div>
                <div class="box-login"> 
                   <img src="../../assets/logo-don.png" alt="logo da empresa">
                </div>
            </div>
            
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
    .box-login{
        width: 50%;
        min-height:40vh ;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        }
    .login{
        width: 100%;
        min-height: 105vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .login-card{
        width: 40%; 
        min-height: 40vh;
        border-radius: 5px;
        background: rgba(70, 70, 70, 0.164);
        }
    form{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input[type="submit"]{
        background: #4AADB3;
        border: 0;
        min-height:5vh ;
        font-weight: 900;
        color: #fff;
        cursor: pointer;
    }
</style>