<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">GESTION DE VILLES</b-col>
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
    <b-container class="bv-example-row margintop80px">
          <b-button variant="success" to="/Poster">Ajouter</b-button>
          <!-- Affiche le table de la ville !-->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Nom</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
          <th scope="col">Auteur</th>
          <th scope="col">Like</th>
          <th scope="col">Commentaires</th>
          <th scope="col">-ACTION-</th>
        </tr>
      </thead>
      <tbody>
        <!-- Boucle pour afficher les infos des villes !-->
        <tr v-for="(city, index) in cities" :key="index">
          <td>{{ city.id }}</td>
          <td><img v-bind:src="city.img" alt="city.name" width="80" /></td>
          <td>{{ city.name }}</td>
          <td>{{ city.desc }}</td>
          <td>{{ city.date }}</td>
          <td>{{ city.author }}</td>
          <td>{{ city.like }}</td>
          <td>{{ city.coms }}</td>
          <td>
            <!-- Boutton pour effacler la ville selectionné !-->
            <b-button variant="danger" @click="delCity(city)">EFFACER</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    </b-container>
  </div>
  
</template>

<script>
const axios = require("axios"); // import axios to use the REST API
export default {
  name: "List",
  created() {
    // Titre de notre page
    document.title = "Gestion de ville | Administration";
  },
// funcs lancés
  mounted() {
    this.getCity();
    this.delCity();
  },
  data() {
    // Retour de données
    return {
      cities: [],
      modalShow: false,
      selectedVille: null,
      searchedManga: [],
      search: null,
    };
  },

  methods: {

    async getCity() {
      // Get the answer from the server and stock it in result
      const result = await axios.get("http://localhost:3000/city/");
      console.log("result", result);
      // Stock the result in dynamic variable that connect HTML and JS
      this.cities = result.data;
    },
    async delCity(city) {
      console.log("remove", city);
      await axios.delete("http://localhost:3000/city/" + city.id);
      this.cities = this.cities.filter(c => c.id != city.id);
    },
  },
};
</script>

<style>
.rodjakimagemodal {
  max-width: 1024px;
}
</style>