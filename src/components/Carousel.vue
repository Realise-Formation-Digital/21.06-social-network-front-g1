<template>
  <v-carousel
  cycle
  :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
         {
          src: "https://www.geneve.ch/sites/default/files/2020-02/lieux-jet-d-eau-ville-geneve-cover.jpg",
        },
         {
          src: "https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/68/0b.jpg",
        },
         {
          src: "https://image.carigami.fr/bm/global/files/images/Dijon_AdobeStock_225213914.jpg",
        },
        {
          src: "https://www.wartsila.com/images/default-source/twentyfour7/master-images/senegal-west-africas-leading-light.tmb-1920x690.jpg?sfvrsn=f8e5a344_3",
        },
        {
          src: "https://img-4.linternaute.com/4WnoL5lUPs4y3-qmobwoVvk6kOk=/fit-in/x630/smart/filters:fill(1D1D1B)/02d9bf9f80bc47df804f86b47677a36b/ccmcms-linternaute/23781022.jpg",
        },
        {
          src: "https://img-4.linternaute.com/uFIOHtIv_ilLI2lbLz0FbGjdLGc=/1080x/smart/b59590de51024ac5813d6fe0a2da07b7/ccmcms-linternaute/10985732.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>