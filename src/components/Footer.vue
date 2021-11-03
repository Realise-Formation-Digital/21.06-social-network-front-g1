<template>
<v-footer
    dark
    padless
    class="d-flex justify-center"
  >
    <v-card
    
      align="center"
      flat
      tile
      class="indigo lighten-1 white--text width-100"
    >
    <v-card-text class="white--text pt-0">
      Faites appel à nous pour peaufiner votre projet, du choix des hôtels à la sélection de vos vols, du dessin de votre itinéraire au tri des activités.  Chez nous, tout est possible !

      </v-card-text>

      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),

}
</script>

<style>
  .width-100 {
    width: 100%;
  }

</style>