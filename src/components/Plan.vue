<template>
  <v-flex xs12 sm12 md4>
    <v-hover>
      <v-card
        class="mx-auto"
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 5 : 2}`"
      >
        <v-img
          class="white--text"
          :src="plan.img"
          height="500px"
          :gradient="
            plan.notAvailable
              ? 'to bottom right, rgba(0,0,0,.63), rgba(0,0,0,0.55)'
              : 'to bottom right, rgba(0,0,0,.33), rgba(0,0,0,.01)'
          "
        >
          <v-card-title white class="justify-center align-middle fill-height">
            <h2>{{ plan.title }}</h2>
          </v-card-title>
        </v-img>
        <v-card-text primary-title>
          <div>
            <h3 class="headline mb-0">{{ plan.title }}</h3>
            <div>
              {{ plan.text }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-flex>
</template>
<script>
export default {
  name: "Plan",
  props: {
    plan: {},
  },
};
</script>
