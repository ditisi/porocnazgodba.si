<template>
  <v-container grid-list-lg id="plans">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Ponudba</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-hover>
          <v-card
            class="mx-auto"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 5 : 2}`"
          >
            <v-img
              :src="images.sopek"
              height="500px"
              gradient="to bottom right, rgba(0,0,0,.33), rgba(0,0,0,.01)"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Poročni stoli</h3>
                <div>
                  Izposoja prav prisrcnih pristno starinskih stolov nasih babic
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-hover>
          <v-card
            class="mx-auto"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 5 : 2}`"
          >
            <v-img
              class="white--text"
              :src="images.oltar"
              height="500px"
              gradient="to bottom right, rgba(0,0,0,.63), rgba(0,0,0,0.55)"
            >
              <v-card-title
                white
                class="justify-center align-middle fill-height"
                ><h2>KMALU</h2></v-card-title
              >
            </v-img>
            <v-card-text primary-title>
              <div>
                <h3 class="headline mb-0">Oltar</h3>
                <div>
                  Izstopajta s prav posebnim dodatkom na vajini poroko.
                  Geometrijski oltar sestkotne oblike bo vsekakor povzdignil
                  civilni obred na novo raven.
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-hover>
          <v-card
            class="mx-auto"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 5 : 2}`"
          >
            <v-img
              :src="images.obleka"
              height="500px"
              gradient="to bottom right, rgba(0,0,0,.33), rgba(0,0,0,.01)"
            >
            </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Klopi</h3>
                <div>
                  8 klopi za svate na civilnem obredu
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-parallax class="parallax" light :src="images.parallax" height="250">
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
export default {
  name: "HomePlans",
  data() {
    return {
      images: {
        sopek: require("../assets/img/sopek.jpg"),
        oltar: require("../assets/img/obred.jpg"),
        obleka: require("../assets/img/obleka.jpg"),
        parallax: require("../assets/img/bg1.jpg"),
      },
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
