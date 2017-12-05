import {http} from './../../configs/config.api'

export default {
  fetchCompetitions(context) {
    http.get('competitions/\?season\=2017')
      .then(response => context.commit('FETCH_COMPETITIONS', {list: response.data}))
  },

  fetchTeamsCompetition(context, id) {
    http.get(`competitions/${id}/teams`)
      .then(response => context.commit('FETCH_TEAMS_COMPETITION', {list: response.data}))
  }
}