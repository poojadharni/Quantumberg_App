import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'
import AboutUs from '@/pages/AboutUs.vue'
import CareerComponent from '@/pages/CareerComponent.vue'
import Services from '@/pages/Services.vue'
import Pricing from '@/pages/Pricing.vue'

import ContactUs from '@/pages/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
		path: '/About',
		name: 'AboutUs',
		component: AboutUs,
		meta: {
			title: 'AboutUs Page',
		},
	},
  {
		path: '/Career',
		name: 'CareerComponent',
		component: CareerComponent,
		meta: {
			title: 'Career Page',
		},
	},
  {
		path: '/Services',
		name: 'Services',
		component: Services,
		meta: {
			title: 'Services Page',
		},
	},
  {
		path: '/Pricing',
		name: 'Pricing',
		component: Pricing,
		meta: {
			title: 'Pricing',
		},
	},
  {
		path: '/Contact',
		name: 'ContactUs',
		component: ContactUs,
		meta: {
			title: 'ContactUs Page',
		},
	},
]

let router = createRouter({
  history: createWebHistory('/Quantumberg'),
  routes,
})

// router.beforeEach(async (to, from, next) => {
//   let isLoggedIn = session.isLoggedIn
//   try {
//     await userResource.promise
//   } catch (error) {
//     isLoggedIn = false
//   }

//   if (to.name === 'Login' && isLoggedIn) {
//     next({ name: 'Home' })
//   } else if (to.name !== 'Login' && !isLoggedIn) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

export default router
