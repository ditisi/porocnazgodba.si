<template>
  <v-container id="contact">
    <v-form v-model="valid">
      <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
          >Vprašanje?</v-flex
        >
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Ime in priimek"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>
          <!--<v-select
                        v-model="select"
                        :items="eventTypes"
                        label="Dogodek"
                        data-vv-name="eventTypes"
                    ></v-select>-->
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-textarea
            name="message"
            label="Sporočilo..."
            hint="Sporočite nam več informacij o vašem dogodku"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
        <v-btn color="grey lighten-3" @click="submit">Pošlji</v-btn>
      </div>
    </v-form>
    <v-parallax light class="parallax" :src="parallax" height="200">
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
import moment from "moment";
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [(v) => !!v || "Ime je zahtevano"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail je zahtevan",
      (v) => /.+@.+/.test(v) || "E-mail mora biti veljaven",
    ],
    date: new Date().toISOString().substr(0, 10),
    select: null,
    eventTypes: ["Poroka", "Rojstni dan", "Zabava", "Poslovni dogodek"],
    parallax: require("../assets/img/main-bg.jpg"),
  }),
  methods: {
    submit() {
      axios.post(
        "http://puslc.diti.si:3000/api/mail",
        {
          subject: this.name,
        },
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      );
    },
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.parallax {
  margin-top: 30px;

  .parallax-content {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0;
  }
}
</style>
