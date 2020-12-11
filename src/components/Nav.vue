<template>
  <nav>
    <img alt="logo don advice, cavalo de xadrez" src="../assets/logo-don.png">
    <a href="">Home</a>
    <a href="">Sobre</a>
    <a href="">Produtos</a>
    <a href="">Home</a>
    <a href="">Home</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  width: 100%;
  min-height: 10vh;
  background: #4AADB3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  width: 10%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
}
nav>a:hover{
  background: #318d92;
  color: #000000
}
nav>img{width: 10%;}
@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }
  nav>a{
    width: 90%;
  }
}
</style>
