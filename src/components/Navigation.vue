<template>
  <div>
    <v-app-bar fixed :color="color">
      <v-toolbar-title
        class="page-title modernline"
        @click="$vuetify.goTo('#landing', options)"
        >{{ appTitle }}</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <template
          v-for="(item, index) in navigationItems"
          class="main-navigation"
        >
          <v-btn text :key="index" @click="$vuetify.goTo(item.link, options)">{{
            item.title
          }}</v-btn>
        </template>
      </div>
      <div class="hidden-md-and-up">
        <v-menu offset-y left transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab icon v-bind="attrs" v-on="on">
              <v-icon>fas fa-ellipsis-v</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in navigationItems"
              :key="index"
              @click="$vuetify.goTo(item.link, options)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <!-- Language selection -->
            <!-- <v-divider></v-divider>
            <v-list-item
              v-for="(language, index) in languages"
              :key="index"
              @click="changeLanguage(language)"
            >
              <v-list-item-title>{{language.text}}</v-list-item-title>
            </v-list-item> -->
            <!-- Language selection -->
          </v-list>
        </v-menu>
      </div>
      <!-- Language selection -->
      <!--<v-menu offset-y left transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="language">{{currentPage}}</v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(language, index) in languages"
            :key="index"
            @click="changeLanguage(language)"
          >
            <v-list-item-title>{{language.text}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
      <!-- Language selection -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      appTitle: "Poročna zgodba",
      drawer: false,
      color: "rgba(255, 255, 255, 0.7)",
      navigationItems: [
        { title: "Zgodba", link: "#story" },
        { title: "Ponudba", link: "#plans" },
        { title: "Ekipa", link: "#team" },
        { title: "Kontakt", link: "#contact" },
      ],
    };
  },
  computed: {
    options() {
      return {
        duration: 750,
        easing: "easeOutQuint",
      };
    },
  },
};
</script>

<style>
.page-title {
  margin-right: 30px;
}
</style>
