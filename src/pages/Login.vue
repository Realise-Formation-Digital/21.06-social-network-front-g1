<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">SE CONNECTER</b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12">
          Veuillez saisir votre adresse e-mail et votre mot de passe.
        </b-col>
      </b-row>
    </b-container>

    <!-- CONTENT OF PAGE !-->
<!-- afficher les inputs de email et mot de passe !-->
    <b-container fluid class="bv-example-row padding100">
      <b-row>
        <b-col md="6" offset-md="3">
          Se connecter <br />
          <div class="login">
            <br />
            <b-form-input
              id="inp"
              type="email"
              v-model="email"
              placeholder="Email"
            ></b-form-input>
            <br />
            <b-form-input
              id="inp"
              type="password"
              v-model="password"
              placeholder="Mot de passe"
            ></b-form-input>

            <br />
            <b-button v-on:click="login" variant="primary">VALIDER</b-button>
            <br />
          </div>
          <br /><br />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",
  created() {
    document.title = "Se connecter de utilisateurs | Administration";
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    token() {

      return localStorage.getItem("token");
    },
    // poster l'email et password
    async login() {
      const result = await axios.post("http://127.0.0.1:8000/api/signin", {
        email: this.email,
        password: this.password,
      });
      console.log("result", result);
      // si le status code est 201 alors stock le token
      if (
        result.status === 201 ||
        (result.status === 200 && result.data.token)
      ) {
        localStorage.setItem("token", result.data.token);
        // Aller sur home apres avoir stocké le token
        this.$router.push({ name: "home" });
      } else {
        console.log("User not exist");
      }
    },
  },
};
</script>


<style scoped>
#inp {
  max-width: 300px;
}
.padding100 {
  margin-top: 100px;
}
</style>