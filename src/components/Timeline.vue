<template>
  <div>
    <v-timeline>
      <v-timeline-item
        v-for="item in timelines"
        :key="item"
        :icon="item.icon ? item.icon : ''"
        :color="item.color"
        fill-dot
      >
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="http://i.pravatar.cc/64" />
          </v-avatar>
        </template>
        <span slot="opposite">
          {{ item.time }}
        </span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ item.title }}</v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelines: [
        {
          icon: "mdi-star",
          color: "pink darken-2",
          time: "Zaroka",
          title: "Najsrecnejsi dan",
          text: "lorem",
        },
        {
          icon: "mdi-help",
          color: "blue lighten-2",
          time: "Izbira datuma",
          title: "Stres?",
          text: "ibsen",
        },
      ],
    };
  },
};
</script>
