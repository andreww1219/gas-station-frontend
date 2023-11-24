import type { RouteRecordRaw } from "vue-router";

const ManageRouter:RouteRecordRaw = {
    path: '/manage',
    redirect: '/manage/user',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '后台管理' },
    children:[
        {
            path: 'user',
            component: () => import('@/views/work-space/work-space-right/manage/UserManage.vue'),
            meta: { title: '用户管理' },
        },
        {
            path: 'task',
            component: () => import('@/views/work-space/work-space-right/manage/TaskManage.vue'),
            meta: { title: '任务管理' }
        }

    ]
}
export default ManageRouter
