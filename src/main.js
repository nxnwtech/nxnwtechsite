// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

// aos for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// smooth scrolling
import VueScrollTo from 'vue-scrollto';

// import main stylesheet
import '~/styles/main.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueScrollTo, {
    offset: -40,
  });

  if (process.isClient) {
    Vue.use(AOS.init());
  }
}
