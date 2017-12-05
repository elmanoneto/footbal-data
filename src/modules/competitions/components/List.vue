<template>
  <div>
    <el-card class="box-card" v-for="competition in competitions()">
      <div slot="header" class="clearfix">
        <span>{{competition.caption}}</span>
      </div>
      <ul>
        <li>Teams: {{competition.numberOfTeams}}</li>
        <li>Number of match days: {{competition.numberOfMatchdays}}</li>
        <li>Current match day: {{competition.currentMatchday}}</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'lv-list',

    methods: {
      ...mapGetters({
        competitions: 'fetchCompetitions'
      })
    }
  }
</script>

<style lang="scss">
  div {
    display: flex;
    flex-flow: row wrap;

    .box-card {
      display: block;
      margin: 5px 10px;

      ul {
        li {
          list-style-type: none;
        }
      }
    }
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 380px;
    }
  }
</style>
