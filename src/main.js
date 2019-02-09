import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import VueRouter from 'vue-router'
import Accueil from './components/accueil.vue'
import Ajout from './components/add.vue'
import Editer from './components/edit.vue'

window.shared_data = {
  movie_to_add: {},
  movie_to_edit: null,
  search: "",
  message: 'Vue JS Films',
  movies: [
    {   
        id: 0,
        title: "L'étrange noël de M. Jack",
        year: 1994,
        synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
    },
    {
        id: 1,
        title: "Rogue One: A Star Wars Story",
        year: 2016,
        synopsys: "Dans une période de conflit, un groupe d'improbables héros s'unit pour voler les plans de l'Étoile de la Mort, l'arme de destruction massive de l'Empire."
    },
    {   
        id: 2,
        title: "Interstellar",
        year: 2014,
        synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
    }
  ]
}
Vue.use(VueRouter);

Vue.component('movie-item', MovieItemComponent);

const routes = [
  { path: '/', component: Accueil },
  { path: '/add', component: Ajout },
  { path: '/edit', component: Editer }
  
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
