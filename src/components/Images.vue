<template>
  <v-layout>
    <v-flex xs12 md10 offset-xs0 offset-md1>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex v-for="(item, index) in images" :key="index" xs6 md4 d-flex>
            <v-card flat tile class="d-flex">
              <v-img
                :src="item.big"
                :lazy-src="item.small"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      images: [
        {
          big: require("../assets/img/content800/navidezna-0014-3349.jpg"),
          small: require("../assets/img/content50/navidezna-0014-3349.jpg")
        },
        {
          big: require("../assets/img/content800/navidezna-0071-3615.jpg"),
          small: require("../assets/img/content50/navidezna-0071-3615.jpg")
        },
        {
          big: require("../assets/img/content800/navidezna-0080-3648.jpg"),
          small: require("../assets/img/content50/navidezna-0080-3648.jpg")
        },
        {
          big: require("../assets/img/content800/navidezna-0072-3616.jpg"),
          small: require("../assets/img/content50/navidezna-0072-3616.jpg")
        },
        {
          big: require("../assets/img/content800/navidezna-0111-3758.jpg"),
          small: require("../assets/img/content50/navidezna-0111-3758.jpg")
        },
        {
          big: require("../assets/img/content800/navidezna-0112-3761.jpg"),
          small: require("../assets/img/content50/navidezna-0112-3761.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
