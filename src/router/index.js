import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import ViewEmployee from '@/components/Viewemployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
    	path: '/new',
    	name: 'new-employee',
    	component: NewEmployee
    },
    {
    	path: '/:employee_id',
    	name: 'view-employee',
    	component: ViewEmployee
    },
    {
    	path: '/edit/:employee_id',
    	name: 'edit-employee',
    	component: EditEmployee
    }
  ]
})
