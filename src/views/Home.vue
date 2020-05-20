<template>
  <span>
    <navigation></navigation>
    <intro></intro>
    <story></story>
    <images></images>
    <timeline></timeline>
    <plans></plans>
    <team></team>
    <contact></contact>
    <main-footer></main-footer>
  </span>
</template>

<script>
import Navigation from "@/components/Navigation";
import Intro from "@/components/Intro";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Images from "@/components/Images";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import MainFooter from "@/components/MainFooter";
import Timeline from "@/components/Timeline";

export default {
  name: "home",
  components: {
    Navigation,
    Intro,
    Story,
    Timeline,
    Plans,
    Images,
    Team,
    Contact,
    MainFooter
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat&display=swap");
</style>
