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
      <v-spacer class="hidden-md-and-up"></v-spacer>

      <template v-for="(item, index) in navigationItems">
        <v-hover :key="index">
          <v-btn
            slot-scope="{ hover }"
            :class="`${hover ? 'deep-purple lighten-5' : ''}`"
            round
            flat
            :to="`${item.link}`"
            class="hidden-sm-and-down"
          >
            {{ item.title }}
          </v-btn>
        </v-hover>
      </template>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        round
        class="hidden-sm-and-down white--text"
        @click="$vuetify.goTo('#contact', options)"
        >Povpraševanje</v-btn
      >
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "BlogNavigation",
  data() {
    return {
      appTitle: "Püšlc",
      drawer: false,
      navigationItems: [
        { title: "Predstavitev", link: "/" },
        { title: "Blog", link: "/blog" }
        //   { title: 'Popvraševanje' }
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
