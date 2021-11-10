<template>
  <div>
    <!-- OUR PAGE TITLE!-->
    <b-container class="hslika" fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col class="textitre" cols="12">AJOUTER UNE VILLE</b-col>
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
    <!-- inputs nom de ville, desc, url img, et date !-->
    <div id="poster" class="container">
      <b-button variant="success" to="/List">List</b-button>
      <div class="card">
        <div class="card-header">Ajouter des villes</div>
        <div class="card-body">
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="name"
              placeholder="Nom de ville"
            />
          </div>
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="desc"
              placeholder="Description"
            />
          </div>
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="img"
              placeholder="Coller url ex. www.img.ch/edin.jpg"
            />
          </div>
          <div class="form-group padding10">
            <input
              type="text"
              class="form-control"
              ref="date"
              placeholder="Date "
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
  name: "Poster",
  created() {
    document.title = "Gestion de villes | Administration";
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
    // post le donné name, desc, img, date
    async postData() {
      const postData = {
        name: this.$refs.name.value,
        desc: this.$refs.desc.value,
        img: this.$refs.img.value,
        date: this.$refs.date.value,
      };

      try {
        const res = await fetch(`${baseURL}/city`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });
        // si error l'affiché
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
</style>