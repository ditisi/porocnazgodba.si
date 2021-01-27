<template>
  <v-container grid-list-lg id="plans">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        Ponudba
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <plan v-for="plan in plans" :key="plan.title" :plan="plan" />
    </v-layout>
    <v-parallax class="parallax" light :src="parallax" height="250">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Misel</h1>
        <h4 class="subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.!
        </h4>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
import Plan from "@/components/Plan";
export default {
  components: {
    Plan,
  },
  name: "HomePlans",
  data() {
    return {
      plans: [
        {
          title: "Sopek",
          text: "Sopek text",
          img: require("../assets/img/sopek.jpg"),
        },
        {
          title: "Oltar",
          text:
            "Izstopajta s prav posebnim dodatkom na vajini poroki. \nGeometrijski oltar sestkotne oblike bo vsekakor povzdignil civilni obred na novo raven.",
          notAvailable: true,
          img: require("../assets/img/obred.jpg"),
        },
        {
          title: "Obleka",
          text: "",
          img: require("../assets/img/obleka.jpg"),
        },
      ],
      parallax: require("../assets/img/bg1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.parallax {
  margin-top: 30px;
}
h3 {
  font-family: "Caveat", cursive !important;
  font-size: 2em !important;
  text-align: center;
  padding-bottom: 20px;
}
</style>
