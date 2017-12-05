<template>
  <div id="app">
    <el-container>
      <el-header>football-data.org API - User Interface with Vue.js</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0 auto;
    background-color: #136b09;
    font-family: 'Source Sans Pro', sans-serif;
  }
  #app {
    width: 100%;
    height: 100;
    color: #ffffff;

    .el-container {
      .el-header {
        text-align: center;
        margin: 10px 0;
        font-size: 30px;
      }
    }
  }
</style>
