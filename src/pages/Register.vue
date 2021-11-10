<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">S'INSCRIRE</b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12"
          >Inscription à votre espace client en ligne</b-col
        >
      </b-row>
    </b-container>

    <!-- CONTENT OF PAGE !-->

    <!-- inputs nom d'utilisateur email et mot de passe !-->
       <b-container fluid class="bv-example-row padding100">
      <b-row>
        <b-col md="6" offset-md="3" sm="12">
    <div id="poster" class="container">
      <div class="card">
        <div class="card-header">
          Merci de renseigner tous les champs ci-dessous pour pouvoir valider
          votre inscription.
        </div>
        <div class="card-body">
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="name"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="password"
              placeholder="Le mot de passe"
            />
          </div>
          <button
            class="btn btn-sm btn-primary padding10 ididesno"
            @click="postData"
          >
            S'inscrire maintenant
          </button>

          <div
            v-if="postResult"
            class="alert alert-secondary mt-2 rezultatneki"
            role="alert"
          >   <!-- Affiche l'erreur ou donnés envoyeé !-->
            <pre>{{ postResult }}</pre>
          </div>
        </div>
      </div>
      
    </div>
    </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
const baseURL = "http://127.0.0.1:8000/api/";

export default {
  name: "Register",
  created() {
    document.title = "Gestion de utilisateurs | Administration";
  },
  data() {
    return {
      postResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    // post les donnés inscrit dans les inputs
    async postData() {
      const postData = {
        username: this.$refs.name.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      // post les donnés dans le server :D 
      try {
        const res = await fetch(`${baseURL}users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });
    // afficher si error et sinon le resultat envoyé
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
        };

        this.postResult = this.fortmatResponse(result);
      } catch (err) {
        this.postResult = err.message;
      }
    },
  },
};
</script>


<style scoped>
.padding10 {
  padding: 3px;
}
.ididesno {
  float: right;
  margin-right: 3px;
  margin-top: 10px;
}
#poster {
  margin-top: 50px;
  margin-bottom: 50px;
}
.rezultatneki {
  margin-top: 3.5rem !important;
}
.padding100 {
  margin-top: 100px;
}
</style>