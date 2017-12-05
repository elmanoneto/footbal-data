<template>
   <table>
     <thead>
       <tr>
          <th>Abbreviation</th>
          <th>Name</th>
          <th>Symbol</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="team in teams().teams">
         <td>{{team.code}}</td>
         <td>{{team.name}}</td>
         <td><img :src="team.crestUrl" alt=""></td>
       </tr>
     </tbody>
   </table>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'competition',

    methods: {
      ...mapActions({
        fetchTeamsCompetition: 'fetchTeamsCompetition'
      }),

      ...mapGetters({
        teams: 'fetchTeamsCompetition'
      })
    },

    mounted() {
      this.fetchTeamsCompetition(this.$route.params.id);
    }
  }
</script>

<style lang="scss">
  table {
    thead {
      th {
        width: 400px;
      }
    }
    tbody {
      tr {
        width: 400px;
        text-align: center;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
