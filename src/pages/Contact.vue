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

    <b-container>
      <b-overlay mode="out-in">
        <b-row>
          <!--<bg-img class="grey darken-4" link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fitourisme.net%2Fque-faire-a-manille%2F&psig=AOvVaw0bmW4KQx_BkfFfQBXhzTuh&ust=1636034916821000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCG5OThivQCFQAAAAAdAAAAABAD"
          src="https://itourisme.net/wp-content/uploads/2016/09/top-10-things-to-do-in-manila.jpg"
          height="125">
         
        
          
        </bg-img>!-->
        </b-row>
      </b-overlay>

      <b-row>
        <b-col cols="12" sm="6">
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" v-model="name" required />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="6">
            <div>
              <label for="email">Email:</label><br />
              <input id="email" type="text" v-model="email" required />
            </div>

            <b-row>
              <b-col cols="12" sm="6">
                <div>
                  <label for="message">Message:</label><br />
                  <input id="message" type="text" v-model="message" required />
                </div>
              </b-col>
            </b-row>

            <br />
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

          <!-- Maps -->
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.9127650590526!2d6.200637315876729!3d46.19229459258493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21a409b191840de1%3A0x55206748a6794bc4!2sCr%C3%A9ation%20de%20site%20internet%20%C3%A0%20Gen%C3%A8ve%20-%20Creasite.ch!5e0!3m2!1sfr!2sch!4v1634803456049!5m2!1sfr!2sch"
              width="100%"
              height="480"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </b-col>
      </b-row>

      <!--titre la team-->
      <b-row>
        <b-col class="section-title-col" data-type="column">
          <h2><span class="bold">L'équipe</span></h2>
          <br />
          <p class="lead">
            Nos developpeurs vous accueillent et assistent au 8, rue Viguet à
            Genève
          </p>
        </b-col>
      </b-row>

      <b-overlay mode="out-in">
        <b-row>
          <b-col cols="3">
            <b-card>
              <b-img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGNkLl8KxsTvA/profile-displayphoto-shrink_200_200/0/1627053755082?e=1641427200&v=beta&t=klVkd87zX184bES5aV2_dwRVnp9zdP1p4dL3CLtm6CE"
                height="300"
                class="grey darken-4"
              >
              </b-img>
              <b-card-title></b-card-title>
              <b-card-text class="text-h6"
                >Edin Ibrahimovic<br />Grad Sarajevo</b-card-text
              >
            </b-card>
          </b-col>

          <b-col cols="3">
            <b-card>
              <b-img
                src="https://media-exp1.licdn.com/dms/image/D4E35AQE30JKSkiP3LQ/profile-framedphoto-shrink_200_200/0/1633090403482?e=1636041600&v=beta&t=wGvTfFPZu2ImRGJHx70XTQeWCywhQpE5tm2GlwRaI9M"
                height="300"
                class="grey darken-4"
              >
              </b-img>
              <b-card-text class="text-h6"
                >Lionel<br />Ville de Dijon</b-card-text
              >
            </b-card>
          </b-col>

          <b-col cols="3">
            <b-card>
              <b-img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGkkuXQxzfdXw/profile-displayphoto-shrink_100_100/0/1634142789940?e=1641427200&v=beta&t=vZGMSkkyAvdLs6WnhTIVL06vkqp7nfLMAt_N_aZnW_I"
                height="300"
                class="grey darken-4"
              >
              </b-img>
              <b-card-text class="text-h6">Maverick<br />Manille</b-card-text>
            </b-card>
          </b-col>

          <b-col cols="3">
            <b-card>
              <b-img
                src="https://media-exp1.licdn.com/dms/image/C4E35AQG4scbQrOW1ww/profile-framedphoto-shrink_200_200/0/1617719919996?e=1636041600&v=beta&t=JJetLguSOUm0RY8aHdyK8WfnAptUa1tadEShkSQ8flo"
                height="300"
                class="grey darken-4"
              >
              </b-img>
              <b-card-text class="text-h6"
                >Davide<br />Tomar cidade</b-card-text
              >
            </b-card>
          </b-col>
        </b-row>
      </b-overlay>

      <b-overlay mode="out-in">
        <b-row>
          <b-col cols="3">
            <b-card>
              <b-img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFWEghYu0IZJA/profile-displayphoto-shrink_200_200/0/1517401072068?e=1641427200&v=beta&t=iwwxbCNWrJZJoJlNoEHo9hpptKYm-_HHzbNur1b7R2M"
                height="300"
                class="grey darken-4"
              >
              </b-img>
              <b-card-text class="text-h6">Khady<br />Deuk Dakar</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-overlay>
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
</style>