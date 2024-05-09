import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Basic.vue'),
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/Basic.vue'),
		},
		{
			path: '/basic',
			name: 'basic',
			component: () => import('../views/Basic.vue'),
		},
		{
			path: '/styling',
			name: 'styling',
			component: () => import('../views/Styling.vue'),
		},
		{
			path: '/rendering',
			name: 'rendering',
			component: () => import('../views/Rendering.vue'),
		},
	],
})

export default router
