<template>
  <v-container
    fluid
    fill-height
    class="home-hero"
    style="max-height: 100vh;"
    id="intro"
  >
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        Poročna zgodba
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Spletna stran v pripravi, do takrat pa nam sledite na socialnih omrezjih
      </div>
      <div class="font-weight-bold white--text text-xs-right">
        <p>
          Ekipa Poročna zgodba
        </p>
      </div>
      <v-card-title>
        <v-btn
          fab
          class="button mt-5 deep-purple lighten-2"
          href="http://facebook.com/porocnazgodba"
          target="_blank"
        >
          <v-icon large color="white" block>fab fa-facebook</v-icon>
        </v-btn>
        <v-btn
          fab
          class="button mt-5 deep-purple lighten-2"
          href="http://instagra.com/porocnazgodba"
          target="_blank"
        >
          <v-icon large color="white" block>fab fa-instagram</v-icon>
        </v-btn>
      </v-card-title>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    options() {
      return {
        duration: 750,
        easing: "easeOutQuint",
      };
    },
  },
};
</script>

<style scoped>
.home-hero {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/img/main-bg.jpg") no-repeat center center fixed;
  width: 100%;
  height: 100%;
}
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
}
.button {
  animation: shadow-pulse 2s infinite;
  margin: 15px;
}
</style>
