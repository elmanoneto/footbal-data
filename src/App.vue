<template>
  <div id="app">
    <Competitions></Competitions>
  </div>
</template>

<script>
  import Competitions from './modules/competitions/components/Container.vue'

  export default {
    name: 'app',
    components: {
      Competitions
    }
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0 auto;
    background-color: #136b09;
  }
  #app {
    width: 100%;
    height: 100;
    color: #ffffff;
  }
</style>
