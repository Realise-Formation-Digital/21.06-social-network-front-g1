<template>
  <div>
    <b-carousel 
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-height="100%"
      img-width="100%"
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->

      <b-carousel-slide 
        img-src= "img/Geneve-recadre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="img/Dijon-recadre.png"
      ></b-carousel-slide>
       <b-carousel-slide
        img-src="img/Lisbonne-recadre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="img/Dakar-recadre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="img/Sarajevo-recadre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="img/Boracay-recadre.jpg"
      ></b-carousel-slide>
      
     
    </b-carousel>

 
  </div>
</template>

<script>
export default {
 
};
</script>

<style>

</style>