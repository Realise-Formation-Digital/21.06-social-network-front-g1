<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#ffffff" 
      shrink-on-scroll
           
      
    >
      <!-- Logo -->

      <v-spacer></v-spacer>

      <!-- Incon du Header -->
      <v-text-field v-if="showSearch"></v-text-field>

      <v-btn  id="color" icon  @click="onclickSearch()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn to="/" id="color" tile height="48"  plain  >
        ACCUEIL 
      </v-btn>
       <v-btn to="/Destination" id="color" tile height="48" plain >
        DESTINATIONS
      </v-btn>
      <v-btn to="/Agence" id="color" tile height="48" plain >
        L'AGENCE
      </v-btn>
      <v-btn to="/Contact" id="color" tile height="48" plain >
        CONTACT
      </v-btn>
      <!-- <v-text-field v-if="showLogin"></v-text-field> -->

      <v-btn id="color" tile height="48" plain  @click="onclickLogin()">
        LOGIN
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showSearch: false,
      showLogin:false,
    };
  },
  methods: {
    onclickSearch() {
      this.showSearch = !this.showSearch;
    },
    onclickLogin(){
      this.showLogin = !this.showLogin;

    }
  },
};
</script>

<style>
#color{
  color: rgb(13, 114, 155);
  margin-top: 20px;
}
.overflow-hidden{
  margin-bottom: -40px;
}
</style>