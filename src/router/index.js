import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            component: AboutUs,
        },
        {
            path: '/products',
            name: 'Products',
            component: Products,
        },
        {   
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        }
      ],
      mode: 'history'
})