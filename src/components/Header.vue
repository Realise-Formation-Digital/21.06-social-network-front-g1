<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="http://consultationformaction.com/wp-content/uploads/2014/09/horizon-2-845x321.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>
        <v-text-field
        v-if="showSearch"
            
          ></v-text-field>

      <v-btn icon  @click="onclickSearch()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showSearch:false,

    };
  },
  methods:{
    onclickSearch(){ 
      this.showSearch = !this.showSearch

    }
  }
};

</script>

<style>
</style>