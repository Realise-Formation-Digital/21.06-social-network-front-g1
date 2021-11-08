<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">GESTION UTILISATEUR</b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </b-col>
      </b-row>
    </b-container>

    <!-- CONTENT OF PAGE !-->

        <form v-on:submit="login">    EMAIL:
            <input type="text" name="email" /><br>    
            PASSWORD:
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />    
        </form>    










  </div>
</template>


<script>


export default {
  name: "Register",
  created() {
    document.title = "Se connecter de utilisateurs | Administration";
  },
};
</script>


<style scoped>

</style>