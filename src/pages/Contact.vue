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
      <b-container fluid>
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
    <b-col>  <b-button variant="success">0224223366</b-button></b-col> 
    <b-col>  <b-button variant="success">info@admin.ch</b-button></b-col>
  </b-row>
                </b-container>
                <b-container class="bv-example-row">
</b-container>
                </b-row
              >
            </b-col>

            <b-col>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      id="form_name"
                      type="text"
                      v-model="name"
                      name="name"
                      class="form-control"
                      placeholder="Nom"
                      required="required"
                      data-error="Firstname is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      id="form_lastname"
                      type="text"
                      v-model="prenom"
                      name="surname"
                      class="form-control"
                      placeholder="Prénom"
                      required="required"
                      data-error="Lastname is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      id="form_email"
                      type="email"
                      v-model="email"
                      name="email"
                      class="form-control"
                      placeholder="Adresse Email"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      v-model="message"
                      class="form-control"
                      placeholder="Message"
                      rows="4"
                      required
                      data-error="Please,leave us a message."
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="sendbutton col-md-12">
                  <br />
                  <b-button
                    squared
                    variant="primary"
                    :class="[name ? activeClass : '']"
                    @click="submitForm()"
                    >Envoyer</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!-- Maps -->
        <b-container class="contact" fluid>
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
      prenom: "",
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
          prenom: this.prenom,
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
      this.prenom = "";
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
  width: 284px;
}
#prenom {
  width: 284px;
}
#email {
  width: 100%;
}
.contact {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.sendbutton {
  float: right;
}
</style>