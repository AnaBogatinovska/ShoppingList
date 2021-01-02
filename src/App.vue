<template>
  <div id="app">
    <landing-page/>
    <router-view/>
  </div>
</template>

<script>
import LandingPage from "./pages/LandingPage.vue"


export default {
  components: { LandingPage },
  name: 'App',
}
</script>

<style>
</style>
