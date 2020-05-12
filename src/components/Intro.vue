<template>
  <v-container
    fluid
    fill-height
    class="home-hero"
    style="max-height: 100vh;"
    id="intro"
  >
    <v-layout justify-center align-center column pa-5>
      <div class="display-2 font-weight-black white--text text-xs-center">
        NARAVA PRIPOVEDUJE
      </div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        ZGODBO
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Vse kar moramo storiti je, da ji prisluhnemo.
      </div>
      <v-btn fab class="button mt-5 grey lighten-4">
        <v-icon large block @click="$vuetify.goTo('#story', options)"
          >expand_more</v-icon
        >
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",
  computed: {
    options() {
      return {
        duration: 750,
        easing: "easeOutQuint"
      };
    }
  }
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
    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
  }
}
.button {
  animation: shadow-pulse 2s infinite;
}
</style>
