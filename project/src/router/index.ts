import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Developers from '../views/Developers.vue'
import DeveloperProfile from '../views/DeveloperProfile.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - Project HQ' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Our Projects - Project HQ' }
  },
  {
    path: '/team',
    name: 'Developers',
    component: Developers,
    meta: { title: 'Our Team - Project HQ' }
  },
  {
    path: '/team/:id',
    name: 'DeveloperProfile',
    component: DeveloperProfile,
    meta: { title: 'Team Member - Project HQ' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us - Project HQ' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 - Page Not Found' }
  }
]

// Update document title based on route meta
routes.forEach(route => {
  route.beforeEnter = (to: any, from: any, next: any) => {
    document.title = to.meta.title || 'Project HQ'
    next()
  }
})

export default routes