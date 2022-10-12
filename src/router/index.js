import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' },
      },
    ],
  },

  // 系统管理
  {
    path: '/system',
    component: Layout,
    redirect: '/system/table',
    name: 'system',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/sysUserList',
        name: 'sysUserList',
        component: () => import('@/views/system/sysUserList'),
        meta: { title: '员工管理', icon: 'table' },
      },
      {
        path: '/sysRoleList',
        name: 'sysRoleList',
        component: () => import('@/views/system/sysRoleList'),
        meta: { title: '角色管理', icon: 'tree' },
      },
      {
        path: '/sysMenuList',
        name: 'sysMenuList',
        component: () => import('@/views/system/sysMenuList'),
        meta: { title: '权限管理', icon: 'tree' },
      },
    ],
  },
  // 房屋管理
  {
    path: '/sysHouse',
    component: Layout,
    redirect: '/sysHouse/table',
    name: 'sysHouse',
    meta: { title: '房屋管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/houseBuilding',
        name: 'houseBuilding',
        component: () => import('@/views/sysHouse/houseBuilding'),
        meta: { title: '栋数管理', icon: 'table' },
      },
      {
        path: '/houseUnit',
        name: 'houseUnit',
        component: () => import('@/views/sysHouse/houseUnit'),
        meta: { title: '单元管理', icon: 'tree' },
      },
      {
        path: '/houseList',
        name: 'houseList',
        component: () => import('@/views/sysHouse/houseList'),
        meta: { title: '房屋管理', icon: 'tree' },
      },
    ],
  },
  // 车位管理
  {
    path: '/sysPark',
    component: Layout,
    redirect: '/sysPark/parkList',
    name: 'sysPark',
    alwaysShow: true,
    meta: { title: '车位管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/parkList',
        name: 'parkList',
        component: () => import('@/views/sysPark/parkList'),
        meta: { title: '车位管理', icon: 'table' },
      },
    ],
  },
  // 业主管理
  {
    path: '/live',
    component: Layout,
    redirect: '/live/liveUser',
    name: 'live',
    alwaysShow: true,
    meta: { title: '业主管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/liveUser',
        name: 'liveUser',
        component: () => import('@/views/live/liveUser'),
        meta: { title: '业主列表', icon: 'table' },
      },
    ],
  },
  // 收费管理
  {
    path: '/fee',
    component: Layout,
    redirect: '/fee/liveUser',
    name: 'fee',
    meta: { title: '收费管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/feePower',
        name: 'feePower',
        component: () => import('@/views/fee/feePower'),
        meta: { title: '电费管理', icon: 'table' },
      },
      {
        path: '/feeWater',
        name: 'feeWater',
        component: () => import('@/views/fee/feeWater'),
        meta: { title: '水费管理', icon: 'table' },
      },
      {
        path: '/feePark',
        name: 'feePark',
        component: () => import('@/views/fee/feePark'),
        meta: { title: '停车管理', icon: 'table' },
      },
    ],
  },
  // 投诉列表
  {
    path: '/userComplaint',
    component: Layout,
    redirect: '/userComplaint/liveUser',
    name: 'userComplaint',
    meta: { title: '投诉管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/userComplaintList',
        name: 'userComplaintList',
        component: () => import('@/views/userComplaint/userComplaintList'),
        meta: { title: '投诉列表', icon: 'table' },
      },
      {
        path: '/myUserComplaint',
        name: 'myUserComplaint',
        component: () => import('@/views/userComplaint/myUserComplaint'),
        meta: { title: '我的投诉', icon: 'table' },
      },
    ],
  },
  // 维修管理
  {
    path: '/repairModel',
    component: Layout,
    redirect: '/repairModel/repairList',
    name: 'repairModel',
    meta: { title: '维修管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/repairList',
        name: 'repairList',
        component: () => import('@/views/repairModel/repairList'),
        meta: { title: '维修列表', icon: 'table' },
      },
      {
        path: '/myRepair',
        name: 'myRepair',
        component: () => import('@/views/repairModel/myRepair'),
        meta: { title: '我的维修', icon: 'table' },
      },
    ],
  },
  // // 公告管理
  {
    path: '/notice',
    component: Layout,
    redirect: '/notice/noticeList',
    name: 'notice',
    alwaysShow: true,
    meta: { title: '维修管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/noticeList',
        name: 'noticeList',
        component: () => import('@/views/notice/noticeList'),
        meta: { title: '维修列表', icon: 'table' },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
