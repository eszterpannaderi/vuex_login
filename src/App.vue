<template>
  <div>
    <app-header></app-header>
  <app-nav></app-nav>
  <div class="container main">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'
export default {
  name:'app',
  components:{AppHeader, AppNav, AppFooter}
};
</script>

<style>
</style>
