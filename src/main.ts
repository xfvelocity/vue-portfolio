import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// @ts-ignore
import VueFullPage from "vue-fullpage.js";
import vuetify from "./plugins/vuetify";

import Button from "@/components/buttons/Button.vue";

Vue.component("Button", Button);
Vue.use(VueFullPage);

Vue.mixin({
  computed: {
    screenWidth: () => store.state.screenWidth,
  },
  methods: {
    goToLink: (link: string) =>
      process.env.VUE_APP_HIDE_SENSITIVE_DATA === "true"
        ? undefined
        : window.open(link),
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
