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

    <b-container>
      <div class="login">
        <input type="text" v-model="email" placeholder="Email" /><br />
        <br />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
        /><br />
        <br />
        <button v-on:click="login">LOGIN</button> <br />
      </div>
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
    async login() {
      const result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
      });
      console.log("Status", result.status);
      if (
        result.status === 201 ||
        (result.status === 200 && result.data.length > 0)
      ) {
        localStorage.setItem("token", "abcd");
       // this.$router.push({ name: "Login" })
      } else {
        console.log("User not exist")
      }
    },
  },
};
</script>


<style scoped>
</style>