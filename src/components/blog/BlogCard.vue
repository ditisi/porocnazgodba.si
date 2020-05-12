<template>
  <v-flex xs12 :class="classes">
    <v-card
      :height="value.prominent ? 350 : 300"
      color="grey lighten-1"
      dark
      :to="`/blog/${value.id}`"
    >
      <v-img
        :src="require(`@/assets/blog/${value.image}`)"
        :lazy-src="require(`@/assets/blog/${value.image}`)"
        height="100%"
        :gradient="
          !value.prominent ? `rgba(0, 0, 0, .70), rgba(0, 0, 0, 0)` : ``
        "
      >
        <v-layout
          v-if="!value.prominent"
          fill-height
          wrap
          text-xs-right
          ma-0
          text-color="white"
        >
          <v-flex xs12>
            <v-chip
              label
              disabled
              class="mx-0 mb-2 text-uppercase"
              color="deep-purple lighten-2"
              text-color="white"
              small
              >{{ value.category }}</v-chip
            >
            <h3 class="title font-weight-bold mb-2 white--text">
              {{ value.title }}
            </h3>
            <div class="caption white--text">
              {{ value.author }}
              <br />
              {{ formatDate(value.date) }}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-btn round>Preberi</v-btn>
          </v-flex>
        </v-layout>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    formatDate(value) {
      return moment(value, "YYYY-MM-DD HH:ii:ss").format("D.M.Y");
    }
  },
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    classes() {
      return {
        md6: this.size === 2,
        md4: this.size === 3
      };
    }
  }
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
