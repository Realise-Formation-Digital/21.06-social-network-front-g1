<template>
  <h1>Header</h1>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showSearch: false,
      showLogin:false,
    };
  },
  methods: {
    onclickSearch() {
      this.showSearch = !this.showSearch;
    },
    onclickLogin(){
      this.showLogin = !this.showLogin;

    }
  },
};
</script>

<style>
#color{
  color: rgb(13, 114, 155);
  margin-top: 20px;
}
.overflow-hidden{
  margin-bottom: -40px;
}
</style>