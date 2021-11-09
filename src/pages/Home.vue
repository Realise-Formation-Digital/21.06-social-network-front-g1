<template>
  <div>
    <Carousel />
    <!-- Première Partie -->
    <b-container class="pading60">
      <div>
        <b-row>
          <b-col class="col-6">
            <div>
              <b-card
                title="Sarajevo"
                img-src="img/Sarajevo.jpg"
                img-alt="Image"
                tag="article"
                style="max-width: 100%"
                :img-height="360"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col cols="6">
            <b-card
              title="Bern"
              img-src="img/Bern.jpg"
              img-alt="Image"
              tag="article"
              style="max-width: 100%"
              :img-height="360"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container class="pading60">
      <b-row class="text-center">
        <b-col cols="12">
          <span> TOP 3 CITY</span>
        </b-col>
      </b-row>
    </b-container>
    <!-- Deuxième Partie -->
    <b-container class="pading60">
      <div>
        <b-row>
          <b-col class="col-4">
            <div>
              <b-card
                title="Genève"
                img-src="img/Gva.jpg"
                img-alt="Image"
                tag="article"
                style="max-width: 100%"
                :img-height="360"
                align="center"
              >
              </b-card>
            </div>
          </b-col>
          <b-col cols="4">
            <b-card
              title="New York"
              img-src="img/Ny.jpg"
              img-alt="Image"
              tag="article"
              style="max-width: 100%"
              :img-height="360"
              align="center"
            >
            </b-card>
          </b-col>
          <b-col cols="4">
            <b-card
              title="Japon"
              img-src="img/Japon.jpg"
              img-alt="Image"
              tag="article"
              style="max-width: 100%"
              :img-height="360"
              align="center"
            >
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <!-- Troisième Partie -->

    <b-container class="pading200">
      <b-row>
        <b-col cols="8"> </b-col>
        <b-col cols="2">
          <div>
            <b-button to="/Register" size="lg" variant="primary">Join Today</b-button>
          </div>
        </b-col>
        <b-col cols="2">
          <div>
            <b-button to="/Contact" size="lg" variant="outline-primary">Contact</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style scoped>
.pading60 {
  margin-top: 80px;
}
.pading200 {
  margin-top: 200px;
}
</style>