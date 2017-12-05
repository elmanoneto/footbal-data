<template>
  <div>
    <List></List>
  </div>
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

