import { createRouter, createWebHistory } from 'vue-router'

/* eslint-disable */
const routes = [
  {
    path: '/',
    name: "Home",
    meta: {
      title: "Page d'accueil"
    },
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
    path: '/programmes',
    name: 'programmes',
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
      title: "Décors Cosplay"
    },
    component: () => import('../views/RubriquecosplayView.vue')
  },
  {
    //Rubrique maid Page render view
    path: '/rubriquemaid',
    name: 'rubriquemaid',
    meta: {
      title: "Maid Café"
    },
    component: () => import('../views/RubriqueMaidView.vue')
  },
  {
    //Ticketing Page render view
    path: '/billeterie',
    name: 'billeterie',
    meta: {
      title: "Billeterie"
    },
    component: () => import('../views/BilleterieView.vue')
  },
  {
    //Mentions Page render view
    path: '/mentionslegales',
    name: 'mentionslegales',
    meta: {
      title: "Mentions légales"
    },
    component: () => import('../views/MentionsLegalesView.vue')
  },
  {
    //Conditions Page render view
    path: '/conditions',
    name: 'conditions',
    meta: {
      title: "Conditions générales"
    },
    component: () => import('../views/ConditionsView.vue')
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router