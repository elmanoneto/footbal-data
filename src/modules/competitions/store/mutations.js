export default {
  FETCH_COMPETITIONS: (state, {list}) => {
    state.competitions = list
  },

  FETCH_TEAMS_COMPETITION: (state, {list}) => {
    state.teamsCompetitions = list
  }
}