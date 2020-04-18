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
import jenissatuankerja from './components/views/jenissatker.vue'
import datadasar from './components/views/datadasar.vue'
import satuankerja from './components/views/satuankerja.vue'
import capaianunit from './components/views/capaianunit.vue'
import periode from './components/views/periode.vue'
import masterindikator from './components/views/masterindikator.vue'
import indikatorperiode from './components/views/indikatorperiode.vue'
import indikatorsatuankerja from './components/views/indikatorsatuankerja.vue'
import indikatorsatuankerjalog from './components/views/indikatorsatuankerjalog.vue'

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
        path: 'jenissatuankerja',
        component: jenissatuankerja,
        name: 'jenissatuankerja',
        meta: {description: 'jenissatuankerja'}
      }, {
        path: 'datadasar',
        component: datadasar,
        name: 'datadasar',
        meta: {description: 'data dasar'}
      }, {
        path: 'satuankerja',
        component: satuankerja,
        name: 'satuankerja',
        meta: {description: 'satuankerja'}
      }, {
        path: 'capaianunit',
        component: capaianunit,
        name: 'capaianunit',
        meta: {description: 'capaianunit'}
      }, {
        path: 'periode',
        component: periode,
        name: 'periode',
        meta: {description: 'periode'}
      }, {
        path: 'masterindikator',
        component: masterindikator,
        name: 'masterindikator',
        meta: {description: 'masterindikator'}
      }, {
        path: 'indikatorperiode',
        component: indikatorperiode,
        name: 'indikatorperiode',
        meta: {description: 'indikatorperiode'}
      }, {
        path: 'indikatorsatuankerja',
        component: indikatorsatuankerja,
        name: 'indikatorsatuankerja',
        meta: {description: 'indikatorsatuankerja'}
      }, {
        path: 'indikatorsatuankerjalog',
        component: indikatorsatuankerjalog,
        name: 'indikatorsatuankerjalog',
        meta: {description: 'indikatorsatuankerjalog'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
