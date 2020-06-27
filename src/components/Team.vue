<template>
  <v-container grid-list-md text-xs-center id="team">
    <v-layout>
      <v-flex
        v-for="(person, i) in images"
        :key="`${i}`"
        xs6
        sm6
        md4
        :class="`offset-md-1`"
      >
        <v-card class="text-md-center">
          <v-img :src="person.img" :aspect-ratio="1 / 1"></v-img>

          <v-card-text primary-title>
            <div>
              <h3 class="headline mb-0 font-weight-thin">
                {{ person.name }}
              </h3>
              <span class="person-title">{{ person.title }}</span>
              <p class="person-info">{{ person.text }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      images: [
        {
          name: "KARIN KEGEL",
          title: "Idejni vodja",
          text: "Organizirana. Dekle s fotoaparatom. Grafična oblikovalka.",
          img: require("../assets/img/karin.jpg"),
        },
        {
          name: "TOMI MOČNIK",
          title: "Dekor|IT|Logistika",
          text: "Čez dan spletni razvijalec, popoldan čas prživim v delavnici.",
          img: require("../assets/img/tomi.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.person-title {
  font-family: "Caveat", cursive;
  font-size: 1.2em;
}
.person-info {
  padding-top: 10px;
}
</style>
