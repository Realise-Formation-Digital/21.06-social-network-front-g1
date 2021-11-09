<template>
<div>
  <h1>Contact</h1>
 <b-container>
  <b-overlay> mode="out-in">
      <b-row>
        <b-img
          src="https://itourisme.net/wp-content/uploads/2016/09/top-10-things-to-do-in-manila.jpg"
          height="125"
          class="grey darken-4"
        >
          <h1 style="text-center" bottom-top>
            <span class="bold"
              >Contactez-nous ci-dessous, nous allons vous répondre le plus
              rapidement.</span
            >
          </h1></b-img
        >
      </b-row>
     </b-overlay>

    <b-row>
      
        <b-col cols="12" sm="6">
       
        
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" b-model="name" required />
          </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6">
        
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" b-model="name" required />
          </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6">
        <form>
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" b-model="name" required />
          </div>
        <br>
        <b-button squared
            variant="primary"
            :class="[name ? activeClass : '']"
            type="submit">Envoyer</b-button>
<div>
            <h5>
            <p b-if="response">{{ response }}</p>
              </h5>
               </div>
        </form>    
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

    <b-overlay> mode="out-in">
      <b-row>
        <b-col cols="3">
          <b-card>
            <b-img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGNkLl8KxsTvA/profile-displayphoto-shrink_200_200/0/1627053755082?e=1641427200&v=beta&t=klVkd87zX184bES5aV2_dwRVnp9zdP1p4dL3CLtm6CE"
              height="300"
              class="grey darken-4"
            >
            </b-img>
            <b-card-title class="text-h6">Edin Ibrahimovic</b-card-title>
            <b-card-text >Grad Sarajevo</b-card-text>
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
            <b-card-text class="text-h6">Lionel<br>Ville de Dijon</b-card-text>
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
            <b-card-text class="text-h6">Maverick<br>Manille</b-card-text>
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
           <b-card-text class="text-h6">Davide<br>Tomar cidade</b-card-text>
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
           <b-card-text class="text-h6">Khady<br>Deuk Dakar</b-card-text>
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