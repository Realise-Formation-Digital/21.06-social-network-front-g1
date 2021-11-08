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
            <b-button variant="danger" @click="delCity(id)">EFFACER</b-button>
            <b-button variant="success">VOIR</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    </b-container>
  </div>
  
</template>

<script>
//import card from "../components/card.vue";
const axios = require("axios"); // import axios to use the REST API
export default {
  name: "List",
  created() {
    document.title = "Gestion de ville | Administration";
  },
  components: {
    // our components
  //  card,
  },
  mounted() {
    this.getCity();
    this.delCity();
  },
  data() {
    // return data
    return {
      cities: [],
      modalShow: false,
      selectedVille: null,
      searchedManga: [],
      search: null,
    };
  },

  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    async handleselectedVille(id) {
      console.log("ecoute", id);
      this.selectedVille = null;
      const caractereid = await axios.get("http://localhost:3000/city/41" + id);
      console.log(caractereid);
      //this.selectedVille = this.mangas.find((manga) => manga.id === id);
      this.selectedVille = caractereid.data;
      this.modalShow = true;
    },
    async getCity() {
      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get("http://localhost:3000/city/");
      console.log("result", result);
      // Stock the result in dynamic variable that connect HTML and JS
      this.cities = result.data;
    },
    async delCity(id) {
      console.log("remove", id);
      const result = await axios.delete("http://localhost:3000/city/" + id);
      console.log("result", result);
      this.cities = result.data;
    },
    searchManga() {
      this.searchedManga = [];
      const searchedWord = this.search;
      this.searchedManga = this.mangas.filter((m) =>
        m.title.toLowerCase().includes(searchedWord.toLowerCase())
      );
    },
  },
};
</script>

<style>
.rodjakimagemodal {
  max-width: 1024px;
}
</style>