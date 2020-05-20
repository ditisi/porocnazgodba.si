<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey lighten-4"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in navigationItems">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="grey lighten-4">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title
        class="page-title"
        @click="$vuetify.goTo('#intro', options)"
        >{{ appTitle }}</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <template v-for="(item, index) in navigationItems">
        <v-btn
          text="true"
          :key="index"
          @click="$vuetify.goTo(item.link, options)"
          class="hidden-sm-and-down"
        >
          {{ item.title }}
        </v-btn>
      </template>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      appTitle: "Poročna zgodba",
      drawer: false,
      navigationItems: [
        { title: "Zgodba", link: "#story" },
        { title: "Ponudba", link: "#plans" },
        { title: "Ekipa", link: "#team" },
        { title: "Kontakt", link: "#contact" }
      ]
    };
  },
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

<style>
.page-title {
  margin-right: 30px;
}
</style>
