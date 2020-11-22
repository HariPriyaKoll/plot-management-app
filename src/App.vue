<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import SiteView from '@/components/Site.vue';

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const routes = [
  { path: '/', component: SiteView, name: 'sites'}
];

export const siteAppRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

@Component({
  name: 'app',
  router: siteAppRouter
})

export default class App extends Vue {
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
