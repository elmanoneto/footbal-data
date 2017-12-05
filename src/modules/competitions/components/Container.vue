<template>
  <el-container>
    <el-header>football-data.org API - User Interface with Vue.js</el-header>
    <el-main>
      <List></List>
    </el-main>
  </el-container>
</template>

<script>
  import {mapActions} from 'vuex'
  import List from './List'

  export default {
    name: 'competition-container',
    components: {List},

    methods: {
      ...mapActions({
        fetchCompetitions: 'fetchCompetitions'
      })
    },

    mounted() {
      this.fetchCompetitions()
    }
  }
</script>

<style lang="scss">
  .el-container {
    .el-header {
      text-align: center;
      margin: 10px 0;
      font-size: 30px;
    }
  }
</style>

