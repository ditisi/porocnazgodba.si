<template>
  <v-footer height="auto">
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

      <v-card-actions class="grey darken-3 justify-center white--text">
        &copy;{{ new Date().getFullYear() }} — <strong>Püšlc</strong>
        <v-spacer></v-spacer>
        Made with &nbsp;<v-icon size="10px" class="red--text"
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
        href: "http://facebook.com/puslc.deko"
      },
      {
        img: "fab fa-instagram",
        href: "http://instagram.com/puslc.deko"
      }
    ]
  })
};
</script>

<style scoped>
a.link {
  color: #e5e9ec !important;
  caret-color: #f4f4f4 !important;
}
</style>
