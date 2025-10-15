import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'
import AboutUs from '@/pages/AboutUs.vue'
import CareerComponent from '@/pages/CareerComponent.vue'
import Services from '@/pages/Services.vue'
import Pricing from '@/pages/Pricing.vue'

import ContactUs from '@/pages/ContactUs.vue'
// import Login from '@/pages/Login.vue'
import TermsOfUse from '@/pages/TermsOfUse.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import TermsOfService from '@/pages/TermsOfService.vue'
import Products from '@/pages/Products.vue'
import ERPSoftware from '@/pages/ERPSoftware.vue'
import HRMSSoftware from '@/pages/HRMSSoftware.vue'
import EducationSoftware from '@/pages/EducationSoftware.vue'
import HealthcareSoftware from '@/pages/HealthcareSoftware.vue'
import Industry from '@/pages/Industry.vue'
import Manufacturing from '@/pages/Manufacturing.vue'
import BillingSoftware from '@/pages/BillingSoftware.vue'
import ECommerceSoftware from '@/pages/ECommerceSoftware.vue'
import CRMSoftware from '@/pages/CRMSoftware.vue'
import HelpdeskSoftware from '@/pages/HelpdeskSoftware.vue'
import LMSSoftware from '@/pages/LMSSoftware.vue'	

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
	{
		path: '/TermsOfUse',
		name: 'TermsOfUse',
		component: TermsOfUse,
		meta: {
			title: 'TermsOfUse',
		},
	},

	{
		path: '/PrivacyPolicy',
		name: 'PrivacyPolicy',
		component: PrivacyPolicy,
		meta: {
			title: 'PrivacyPolicy',
		},
	},
	{
		path: '/TermsOfService',
		name: 'TermsOfService',
		component: TermsOfService,
		meta: {
			title: 'TermsOfService',
		},
	},
	{
		path: '/Products',
		name: 'Products',
		component: Products,
		meta: {
			title: 'Products',
		},
	},
	{
		path: '/ERPSoftware',
		name: 'ERPSoftware',
		component: ERPSoftware,
		meta: {
			title: 'ERPSoftware',
		},
	},
	{
		path: '/HRMSSoftware',
		name: 'HRMSSoftware',
		component: HRMSSoftware,
		meta: {
			title: 'HRMSSoftware',
		},
	},
	{
		path: '/EducationSoftware',
		name: 'EducationSoftware',
		component: EducationSoftware,
		meta: {
			title: 'EducationSoftware',
		},
	},
	{
		path: '/HealthcareSoftware',
		name: 'HealthcareSoftware',
		component: HealthcareSoftware,
		meta: {
			title: 'HealthcareSoftware',
		},
	},
	{
		path: '/Industry',
		name: 'Industry',
		component: Industry,
		meta: {
			title: 'Industry',
		},
	},
	{
		path: '/Manufacturing',
		name: 'Manufacturing',
		component: Manufacturing,
		meta: {
			title: 'Manufacturing',
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
		path: '/BillingSoftware',
		name: 'BillingSoftware',
		component: BillingSoftware,
		meta: {
			title: 'BillingSoftware',
		},
	},
	{
		path: '/ECommerceSoftware',
		name: 'ECommerceSoftware',
		component: ECommerceSoftware,
		meta: {
			title: 'ECommerceSoftware',
		},
	},
	{
		path: '/CRMSoftware',
		name: 'CRMSoftware',
		component: CRMSoftware,
		meta: {
			title: 'CRMSoftware',
		},
	},
	{
		path: '/HelpdeskSoftware',
		name: 'HelpdeskSoftware',
		component: HelpdeskSoftware,
		meta: {
			title: 'HelpdeskSoftware',
		},
	},
	{
		path: '/LMSSoftware',
		name: 'LMSSoftware',
		component: LMSSoftware,
		meta: {
			title: 'LMSSoftware',
		},
	},
	// {
	// 	path: '/Login',
	// 	name: 'Login',
	// 	component: Login,
	// 	meta: {
	// 		title: 'Lagin Page',
	// 	},
	// },
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
