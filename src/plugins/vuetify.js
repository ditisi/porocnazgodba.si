// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import sl from "vuetify/es5/locale/sl";

Vue.use(Vuetify);

const opts = {
  iconfont: "md",
  lang: {
    locales: { sl },
    current: "sl"
  }
};

export default new Vuetify(opts);
