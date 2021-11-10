<template>
  <div>
    <Carousel />
    <!-- Première Partie -->
    <b-container class="pading60">
      <div>
        <b-row>
          <b-col cols="" sm="" md="" lg="" xl="*">
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
          <b-col cols="" sm="" md="" lg="" xl="*">
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
          <b-col cols="" sm="" md="" lg="" xl="*">
            <div>
              <b-card
                title="Genève"
                img-src="img/Gva.jpg"
                img-alt="Image"
                tag="article"
                style="max-width: 100%"
                align="center"
                height:auto
              >
              </b-card>
            </div>
          </b-col>
          <b-col cols="" sm="" md="" lg="" xl="*">
            <b-card
              title="New York"
              img-src="img/Ny.jpg"
              img-alt="Image"
              tag="article"
              style="max-width: 100%"
              align="center"
              height:auto
            >
            </b-card>
          </b-col>
          <b-col cols="" sm="" md="" lg="" xl="*">
            <b-card
              title="Japon"
              img-src="img/Japon.jpg"
              img-alt="Image"
              tag="article"
              style="max-width: 100%"
              align="center"
              height:auto
            >
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <!-- Troisième Partie -->
    <br>
    <b-container class="bv-example-row" style="padding-top:80px;">
      <b-row>
        <b-col style="font-size:26px; font-weight:900" sm="12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore</b-col
        >
        <b-col cols="2"><b-button to="/Register" size="lg" variant="primary"
            >Join</b-button
          ></b-col
        >
        <b-col col lg="2"><b-button to="/Contact" class="right12" size="lg" variant="outline-primary"
            >Contact</b-button
          ></b-col
        >
      </b-row>
      <br> <br> <br> <br>
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
.right12 {
  float: right;
}
</style>