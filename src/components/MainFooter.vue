<template>
  <v-footer height="auto" padless>
    <v-card class="flex" flat tile>
      <v-card-title class="grey lighten-4">
        <strong class="subheading">Sledite nam na socialnih omrežjih</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.img"
          class="mx-3"
          icon
          target="_blank"
          :href="icon.href"
        >
          <v-icon size="24px">{{ icon.img }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="lower-footer justify-center white--text">
        &copy;{{ new Date().getFullYear() }} — <strong>Poročna zgodba</strong>
        <v-spacer></v-spacer>
        Made with &nbsp;<v-icon size="10px" class="icon white--text"
          >fas fa-heart</v-icon
        >&nbsp; by &nbsp;<a
          class="link"
          flat
          href="http://diti.si"
          target="_blank"
          >diti.si</a
        >
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "MainFooter",
  data: () => ({
    icons: [
      {
        img: "fab fa-facebook",
        href: "http://facebook.com/porocnazgodba",
      },
      {
        img: "fab fa-instagram",
        href: "http://instagram.com/porocnazgodba",
      },
    ],
  }),
};
</script>

<style scoped>
a.link {
  color: #e5e9ec !important;
  caret-color: #f4f4f4 !important;
  padding-left: 5px;
}
.icon {
  width: 20px;
}
.lower-footer {
  background-color: #83a9a4;
}
</style>
