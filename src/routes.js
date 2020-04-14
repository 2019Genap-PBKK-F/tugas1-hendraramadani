import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import Jexcel from './components/views/Jexcel.vue'
import Chart from './components/views/Chart.vue'
import kategoriunit from './components/views/kategoriunit.vue'
import datadasar from './components/views/datadasar.vue'
import unit from './components/views/unit.vue'
import capaianunit from './components/views/capaianunit.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'jexcel',
        component: Jexcel,
        name: 'Jexcel',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'chart',
        component: Chart,
        name: 'Chart',
        meta: {description: 'Chart.js'}
      }, {
        path: 'kategoriunit',
        component: kategoriunit,
        name: 'kategoriunit',
        meta: {description: 'kategoriunit'}
      }, {
        path: 'datadasar',
        component: datadasar,
        name: 'datadasar',
        meta: {description: 'data dasar'}
      }, {
        path: 'unit',
        component: unit,
        name: 'unit',
        meta: {description: 'unit'}
      }, {
        path: 'capaianunit',
        component: capaianunit,
        name: 'capaianunit',
        meta: {description: 'capaianunit'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
