<template>
  <h1>Contact</h1>
</template>


<script>
/* Import axios */
import axios from "axios";

export default {
  name: "Contact",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      response: "",
      activeClass: "active",
    };
  },
  methods: {
    /* WRITE DATA TO JSONSERVER */
    submitForm() {
      axios
        .post("http://localhost:3000/mails", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          // console.log(response);
          // this.response = response.data
          this.response = "Message sended successfully";
          console.log(JSON.stringify(response, null, 2));
        })
        .catch((error) => {
          this.response = "Error: " + error.response.status;
        });
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.section-title-col {
  text-align: center;
}

.text-h6 {
  text-align: center;
}
</style>