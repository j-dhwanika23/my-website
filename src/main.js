import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// ------------------ FONT AWESOME -----------------------------------------------
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
  faFontAwesome,
  faLinkedin,
  faSalesforce,
  faGithub,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFontAwesome, faLinkedin, faSalesforce, faGithub, faTwitterSquare);
import {
  faEnvelope,
  faArrowRight,
  faCircle,
  faFilePdf,
  faTools,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faEnvelope, faArrowRight, faCircle, faFilePdf, faTools);
Vue.component("faw-icon", FontAwesomeIcon);
// --------------------------------------------------------------------------------

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");