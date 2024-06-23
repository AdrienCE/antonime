import { createRouter, createWebHistory } from 'vue-router'

/* eslint-disable */
const routes = [
  {
    //Home Page render view
    path: '/',
    name: 'home',
    meta: {
      title: "Page d'accueil"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    //Exposants Page render view
    path: '/exposants',
    name: 'exposants',
    meta: {
      title: "Exposants"
    },
    component: () => import('../views/ExposantsView.vue')
  },
  {
    //Programmes Page render view
    path: '/programme',
    name: 'programme',
    meta: {
      title: "Programmes"
    },
    component: () => import('../views/ProgrammeView.vue')
  },
  {
    //Infos pratiques Page render view
    path: '/infospratiques',
    name: 'infospratiques',
    meta: {
      title: "Informations Pratiques"
    },
    component: () => import('../views/InfospratiquesView.vue')
  },
  {
    //Artistes Page render view
    path: '/artistes',
    name: 'artistes',
    meta: {
      title: "Artistes"
    },
    component: () => import('../views/ArtistesView.vue')
  },
  {
    //Rubrique cosplay Page render view
    path: '/rubriquecosplay',
    name: 'rubriquecosplay',
    meta: {
      title: "Rubrique Cosplay"
    },
    component: () => import('../views/RubriquecosplayView.vue')
  },
  {
    //404 Page render view
    path: "/:pathMatch(.*)*",
    name: 'ErrorView',
    meta: {
      title: "Page 404"
    },
    component: () => import('../views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router