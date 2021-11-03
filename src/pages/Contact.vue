<template>
  <div>
    <v-container>
      <div class="title text-center">
        <h1><span class="bold">CONTACT</span></h1>
      </div>

      <v-row>
        <v-col><p>ciao</p></v-col>
        <v-col>ciao</v-col>
        <v-col>ciao</v-col>
      </v-row>

      <v-row class="pa-6">
        <v-col lg="8" md="8" sm="12">
          <!-- Formulaire -->
          <form @submit.prevent="submitForm">
            <div>
              <label for="name">Name:</label><br />
              <input id="name" type="text" v-model="name" required />
            </div>

            <div>
              <label for="email">Email:</label><br />
              <input id="email" type="email" v-model="email" required />
            </div>

            <div>
              <label for="message">Message:</label><br />
              <textarea
                id="message"
                placeholder="Votre message"
                v-model="message"
                required
              ></textarea>
            </div>

            <v-btn
              squared
              variant="primary"
              :class="[name ? activeClass : '']"
              type="submit"
              >Send</v-btn
            >
            <div>
              <h5>
                <p v-if="response">{{ response }}</p>
              </h5>

              <!--pre>{{ response }}</!--pre !-->
            </div>
          </form>
        </v-col>
      </v-row>

      <!--titre la team-->
      <div class="section-title-col" data-type="column">
        <h2><span class="bold">L'équipe</span></h2>
        <p class="lead">
          Nos developpeurs et assistants vous accueillent au 8, rue Viguet à
          Genève
        </p>
      </div>
    </v-container>
  </div>
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
</style>