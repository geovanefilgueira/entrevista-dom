<template>
    <div class="login">
        <Nav/>
        <div class="login-card">
            <div class="flex-row">
                <div class="box-login">
                    <h1>Login</h1>
                    
                    <form class="" @submit.prevent>
                        <label class="w90">Login local, rota painel publica...</label>
                        <label class="w90">User: geovane pass: 123</label>
                        <strong class="w90">Usuario:</strong>
                        <input type="text" v-model="usuario" class="w90" required>
                       
                        <strong class="w90"> Senha:</strong>
                        <input type="text" v-model="senha" class="w90" required>
                        <div class="w90">
                            <input type="checkbox" required>
                            <label>Aceito os termos de uso</label>
                        </div>
                        <input type="submit" class="w90 b12" value="Entrar" v-on:click="loginIsTrue" >
                    </form>
                </div>
                <div class="box-login box-login-logo"> 
                   <img src="../../assets/logo-don.svg" alt="logo da empresa" class="w90">
                    usuario é {{usuario}} e a senha é {{senha}}
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
    },
    
    data(){
        return{
            usuario:"",
            senha: ""
                
        }
    },
    methods:{
        loginIsTrue:function(){
            if(this.usuario==="geovane" && this.senha==="123"){
                this.$router.push("/painel")
            }
            else{
                alert("senha e/ou usuario incorretos")
            }
        }
    }
}
</script>

<style scoped>
    .box-login{
        width: 80%;
        min-height:50vh ;
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
        width: 55%; 
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
    @media only screen and (max-width: 600px) {
        .box-login-logo{display: none;}
        .login-card{width: 80%;}
        .box-login{width: 90%;}
    }
</style>