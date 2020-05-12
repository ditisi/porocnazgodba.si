<template>
  <span>
    <blog-navigation></blog-navigation>
    <v-container grid-list-xl>
      <v-breadcrumbs :items="items" divider="|"></v-breadcrumbs>
      <v-layout column>
        <v-parallax
          class="parallax"
          light
          :src="require(`@/assets/blog/${blogPost.image}`)"
          height="250"
        >
          <v-layout align-center column justify-center>
            <h1 class="display-2 font-weight-thin mb-3">
              {{ blogPost.title }}
            </h1>
            <h3 class="subheading">{{ blogPost.author }}</h3>
          </v-layout>
        </v-parallax>
        <v-flex class="display-2 text-xs-center my-5"></v-flex>
        <v-flex v-html="blogPost.content"></v-flex>
      </v-layout>

      <v-flex class="text-xs-center display-1 font-weight-black my-5"
        >Preberi tudi</v-flex
      >
      <v-layout wrap>
        <v-flex xs12>
          <slot />
        </v-flex>

        <blog-card
          v-for="article in lastBlogs"
          :key="article.title"
          :size="3"
          :value="article"
        />
      </v-layout>
    </v-container>
    <main-footer></main-footer>
  </span>
</template>

<script>
import axios from "axios";

// Utilities
export default {
  name: "BlogPost",
  components: {
    BlogNavigation: () => import("@/components/blog/BlogNavigation"),
    MainFooter: () => import("@/components/MainFooter"),
    BlogCard: () => import("@/components/blog/BlogCard")
  },
  data: () => ({
    items: [
      {
        text: "Blog",
        disabled: false,
        href: "#/blog"
      }
    ]
  }),
  mounted: function() {
    this.items.push({
      text: this.blogPost.title,
      disabled: true
    });
    axios.get("http://puslc.diti.si:3030/api/blogs/1").then(response => {
      this.blogPosts = response.data;
    });
  },
  computed: {
    blogPost() {
      let id = parseInt(this.$route.params.id);
      return this.blogPosts.find(function(blogPost) {
        return blogPost.id === id;
      });
    },
    lastBlogs() {
      let id = parseInt(this.$route.params.id);
      let shuffle = function(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      };
      let filteredBlogs = this.blogPosts.filter(function(blogPost) {
        return blogPost.prominent != true && blogPost.id !== id;
      });
      return shuffle(filteredBlogs).slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped></style>
