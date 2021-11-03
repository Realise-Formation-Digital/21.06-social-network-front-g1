<template>
  <div>
  <b-container>
    <h1><p class="title text-center">CONTACT</p></h1>
    <b-row>
      <b-col lg="8" md="8" sm="12">
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
            <textarea id="message"  placeholder="Votre message" v-model="message" required></textarea>
          </div>
          <b-button
            squared
            variant="primary"
            :class="[name ? activeClass : '']"
            type="submit"
            >Send</b-button
          >
          <div>
            <h5>
              <p v-if="success">{{ success }}</p>
            </h5>

            <!--pre>{{ response }}</!--pre !-->
          </div>
        </form>
         
      </b-col>
    </b-row>

    <!--titre la team-->
    <div class="section-title-col" data-type="column"> 
      <h2 class="">L'équipe</h2> 
      <p class="lead">Nos developpeurs et assistants vous accueillent au 8, rue Viguet à Genève</p>
    </div>
  </b-container>
  </div>
</template>


<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.col {
  text-align: center;
}


</style>