import Container from './components/Container'
import Competition from './components/Competition'

export default [
  {
    path: '/', 
    component: Container, 
    alias: '/competitions',
  },
  {path: '/competitions/:id', component: Competition, name: 'competition'},
  {path: '*', component: Competition}
]