<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">DESTINATION </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </b-col>
      </b-row>
    </b-container>
    <!-- CONTENT OF PAGE !-->
    <b-container class="bv-example-row margintop80px">
      <b-row>
        <b-col md="6" v-for="(city, index) in cities" :key="index">
          <card
            :id="city.id"
            :cityName="city.name"
            :cityDate="city.date"
            :img="city.img"
            @selectedVille="handleselectedVille"
        /></b-col>
      </b-row>
    </b-container>

    <!-- | MODAL | -->
    <b-modal
      dialog-class="rodjakimagemodal"
      v-model="modalShow"
      hide-footer
      :title="selectedVille && selectedVille.name"
    >
      <b-card
        :img-src="selectedVille && selectedVille.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100%"
        class="mb-2"
      >
        <b-row>
          <b-col sm="3"
            ><b>LIKE:</b> {{ selectedVille && selectedVille.like }}</b-col
          >
          <b-col sm="5"
            ><b>DATE:</b> {{ selectedVille && selectedVille.date }}</b-col
          >
          <b-col sm="4"
            ><b>AUTHOR:</b> {{ selectedVille && selectedVille.author }}</b-col
          >
        </b-row>
        <p></p>
 

        <b-card-text>
          {{ selectedVille && selectedVille.desc }}
        </b-card-text>
      </b-card>

      <!-- <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="selectedVille && selectedVille.img"
                :alt="selectedVille && selectedVille.name"
                class="rounded-0"
              ></b-card-img>
              <a :href="selectedVille && selectedVille.url" target="_blank"
                >LIEN EXTERNE</a
              >
            </b-col>
            <b-col md="6">
              <b-card-body :title="selectedVille && selectedVille.name">
                KANDJI:{{ selectedVille && selectedVille.name_kanji }}<br />
                <b-card-text class="tekstba">
                  {{ selectedVille && selectedVille.about }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card> -->
    </b-modal>
  </div>
</template>

<script>
import card from "../components/card.vue";
const axios = require("axios"); // import axios to use the REST API
export default {
  name: "Destination",
  created() {
    document.title = "Destination | Agence de voyage à Genève";
  },
  components: {
    // our components
    card,
  },
  mounted() {
    this.getCity();
  },
  data() {
    // return data
    return {
      cities: [],
      modalShow: false,
      selectedVille: null,
      searchedManga: [],
      search: null,
      comments: [{
          id: 1,
          counter: {
            likes: 0,
            dislikes: 0
          }
        },
        {
          id: 2,
          counter: {
            likes: 0,
            dislikes: 0
          }
        },
      ],
    };
  },
  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    async handleselectedVille(id) {
      console.log("ecoute", id);
      this.selectedVille = null;
      const caractereid = await axios.get("http://localhost:3000/city/" + id);
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
    searchManga() {
      this.searchedManga = [];
      const searchedWord = this.search;
      this.searchedManga = this.mangas.filter((m) =>
        m.title.toLowerCase().includes(searchedWord.toLowerCase())
      );
    },
        increment(index) {
      this.comments[index].counter.likes++;
    },
    decrement(index) {
      this.comments[index].counter.dislikes++;
    },
  },
};
</script>

<style>
.rodjakimagemodal {
  max-width: 1024px !important;
}
</style>
