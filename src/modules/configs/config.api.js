import axios from 'axios'

export let http = axios.create({
  baseURL: 'http://api.football-data.org/v1/',
  headers: {'X-Auth-Token': '510bc1d40d104e97946127d5868ae355'}
})