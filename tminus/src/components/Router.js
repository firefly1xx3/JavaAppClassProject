{/* <script> */}
import VueRouter from 'vue-router';
import DashBoard from '../pages/DashBoard.vue'
import Settings from '../pages/AccountSettings.vue'
import Groups from '../pages/Groups.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  }
]

export default new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // mode: 'history',
  mode: "history",
  routes: routes
});
// </script>
