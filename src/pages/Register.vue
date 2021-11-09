<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">GESTION UTILISATEUR</b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textp" cols="12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </b-col>
      </b-row>
    </b-container>

    <!-- CONTENT OF PAGE !-->
    <div id="poster" class="container">
      <div class="card">
        <div class="card-header">Ajouter des utilisateurs</div>
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
            Ajouter
          </button>

          <div
            v-if="postResult"
            class="alert alert-secondary mt-2 rezultatneki"
            role="alert"
          >
            <pre>{{ postResult }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const baseURL = "http://localhost:3000";

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

    async postData() {
      const postData = {
        username: this.$refs.name.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };

      try {
        const res = await fetch(`${baseURL}/users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        //const edin = "testing";

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
</style>