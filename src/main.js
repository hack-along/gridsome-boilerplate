// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import moment from 'moment-timezone';
import '~/assets/css/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import HeroLayout from '~/layouts/Hero.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import HeroContainer from '~/components/HeroContainer.vue'
import Card from '~/components/Card.vue'
import VueScrollTo from 'vue-scrollto'
import EventContainer from '~/components/EventContainer.vue'





export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('LayoutHero', HeroLayout)

  //add page parts as default components
  Vue.component('nav-bar', NavBar)
  Vue.component('hero-container', HeroContainer)
  Vue.component('g-footer', Footer)

  //cards
  Vue.component('card', Card)

  //custom contnet parts
  //events
  Vue.component('event-container', EventContainer)

  //initilize other plugins
  Vue.use(VueScrollTo);

  Vue.filter('formatDate', function (value, format) {
    if (!value) return;
    let date,
      isoTimestamp;

    format = format ? format : 'MM-DD-YYYY';
    isoTimestamp = moment(String(value), 'YYYY-MM-DDTHH:mm:ssZ').isValid();

    date = isoTimestamp ?
      moment(String(value), 'YYYY-MM-DDTHH:mm:ssZ').format(format) :
      moment(String(value), 'x').format(format);

    return date
  });
  Vue.filter('formatTime', function (value, format) {
    if (!value) return;
    let date,
      isoTimestamp;

    format = format ? format : 'HH:mm z';
    isoTimestamp = moment(value, 'h:mm a').isValid();
    // let newDate = isoTimestamp ? moment.tz(value, 'h:mm a', 'Europe/Rome') : false;
    // if (newDate) {
    //   console.log(newDate)
    //   console.log(newDate.tz('America/Costa_Rica').format(format))
    //   console.log(newDate.tz('Asia/Kolkata').format(format))
    // }
    date = isoTimestamp ? moment(value, 'h:mm a').tz('Europe/Rome').format(format) : value;

    if (date !== "00:00") return date
  });


}