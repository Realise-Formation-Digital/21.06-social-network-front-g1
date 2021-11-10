<template>
  <div>
    <!-- affiche l'image, nom et date d'une ville!-->
    <!-- @click="selectVille()" notre lien vers  ville-->
    <b-card
      :img-src="img"
      img-alt="Image"
      :img-height="280"
      border-variant="#ffffff"
      img-top
      tag="article"
    
      class="mb-2 edinslika"
      
      @click="selectVille()"
    >
      <b-card-text>{{ cityName }} <br /> </b-card-text>
      <b-card-text>Date: {{ cityDate }} <br /> </b-card-text>

    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Destination",
  props: {
    id: {
      type: Number,
      required: false,
    },
    cityName: {
      type: String,
      default: "",
      required: true,
    },
    cityDate: {
      type: String,
      default: "12/22/2021",
      required: false,
    },
    img: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    // envoie la ville selected 
    selectVille() {
      this.$emit("selectedVille", this.id);
    },
  },
};

/*MODAL START*/
</script>

<style scoped>

.edinkartica {
  float: left;
}
.dugme {
  right: 10px;
  position: absolute;
  bottom: 10px;
}

</style>