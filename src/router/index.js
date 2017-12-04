import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import AppMain from '@/views/layout/AppMain'
import Navbar from '@/views/layout/Navbar'
import Sidebar from '@/views/layout/Sidebar'
import testmain from '@/test/testmain'

Vue.use(Router)

export const constantRouterMap = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Layout
	},
	{
		path: '/navbar',
		component: Sidebar
	},
	{
		path: '/test',
		component: testmain
	},
	{
		path: '*',
		redirect: '/'
	} 
]

export default new Router({
	mode: 'history',
	routes: constantRouterMap
})