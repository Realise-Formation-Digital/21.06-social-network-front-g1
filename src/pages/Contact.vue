<template>
  <div>
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">CONTACT </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12"
          >Prenez contact ci-dessous, nous allons vous répondre le plus
          rapidement.
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-container>
        <b-container class="bv-example-row padding80">
          <b-row>
            <b-col>
              <b-card-body title="ADRESSE">
                <b-card-text>
                  Quartier Monplaisir 174, <br />avenue des Frères Lumière -
                  69008 LYON
                </b-card-text>
              </b-card-body>
              <b-row>
                <b-container class="bv-example-row padding80">
                  <b-row>
                    <b-col>
                      <b-card-body>
                        <b-card-text>
                          <button type="button" class="btn btn-primary">
                            022 422 33 66
                          </button>
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                    <b-col>
                      <b-card-body>
                        <b-card-text>
                          <button type="button" class="btn btn-primary">
                            022 422 33 66
                          </button>
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-container></b-row
              >
            </b-col>

            <b-col>
              <div class="contact">
                <input
                  id="name"
                  type="text"
                  v-model="name"
                  placeholder="Nom"
                  required
                />
                <input
                  id="prenom"
                  type="text"
                  v-model="prenom"
                  placeholder="Prénom"
                  required
                /><br />
                <input
                  id="email"
                  type="text"
                  v-model="email"
                  placeholder="Adresse Email"
                  required
                /><br />
                <input
                  id="prenom"
                  type="text"
                  v-model="prenom"
                  placeholder="Prénom"
                  required
                /><br />
                <textarea
                  placeholder="Message"
                  id="message"
                  type="text"
                  rows="3"
                  v-model="message"
                  required
                /><br /><br />
                <b-button
                  squared
                  variant="primary"
                  :class="[name ? activeClass : '']"
                  @click="submitForm()"
                  >Envoyer</b-button
                >
                <div>
                  <h5>
                    <p b-if="response">{{ response }}</p>
                  </h5>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!-- Maps -->
        <b-container fluid>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.877517634499!2d6.126591315581985!3d46.192995979116255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2e1299827b%3A0xb6bbc30dd8e5306f!2zUsOpYWxpc2U!5e0!3m2!1sfr!2sch!4v1636465081519!5m2!1sfr!2sch"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </b-container>
      </b-container>
      <!--titre la team-->
    </b-container>
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

.text-h6 {
  text-align: center;
}
.padding80 {
  padding: 80px;
}
#name {
  width: 90%;
}
#email {
  width: 100%;
}
</style>