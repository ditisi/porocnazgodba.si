<template>
  <span>
    <blog-navigation></blog-navigation>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <slot />
        </v-flex>

        <blog-card
          v-for="(article, i) in paginatedBlogs"
          :key="article.title"
          :size="layout[i]"
          :value="article"
        />
      </v-layout>

      <v-layout align-center>
        <v-flex xs3>
          <v-btn
            v-if="page !== 1"
            fab
            class="button mt-2 deep-purple white--text lighten-2"
            title="Prejšnja stran"
            square
            @click="page--"
          >
            <v-icon>navigate_before</v-icon>
          </v-btn>
        </v-flex>

        <v-flex xs6 text-xs-center subheading
          >STRAN {{ page }} OD {{ pages }}</v-flex
        >

        <v-flex xs3 text-xs-right>
          <v-btn
            v-if="pages > 1 && page < pages"
            fab
            class="button mt-2 deep-purple white--text lighten-2"
            title="Naslednja stran"
            square
            @click="page++"
          >
            <v-icon>navigate_next</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <main-footer></main-footer>
  </span>
</template>

<script>
// Utilities
// import { mapState } from 'vuex';
import axios from "axios";
export default {
  name: "Feed",
  components: {
    BlogNavigation: () => import("@/components/blog/BlogNavigation"),
    MainFooter: () => import("@/components/MainFooter"),
    BlogCard: () => import("@/components/blog/BlogCard"),
  },
  data: () => ({
    blogPosts: [],
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
    numberOfBlogs: 11,
  }),
  computed: {
    // ...mapState(['blogPosts']),
    pages() {
      return Math.ceil(this.blogPosts.length / this.numberOfBlogs);
    },
    paginatedBlogs() {
      const start = (this.page - 1) * this.numberOfBlogs;
      const stop = this.page * this.numberOfBlogs;
      return this.blogPosts.slice(start, stop);
    },
  },
  mounted() {
    axios.get("http://puslc.diti.si:3030/api/blogs/").then((response) => {
      this.blogPosts = response.data;
    });
  },
  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
