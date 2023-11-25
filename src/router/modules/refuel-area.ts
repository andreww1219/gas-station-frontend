import type { RouteRecordRaw } from "vue-router";

const RefuelAreaRouter:RouteRecordRaw = {
    path: '/refuel-area',
    redirect: '/refuel-area/img',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '加油区' },
    children:[
        {
            path: 'img',
            component: () => import('@/views/work-space/work-space-right/refuel-area/ImgHandle.vue'),
            meta: { title: '图像处理' },
        },
        {
            path: 'video',
            component: () => import('@/views/work-space/work-space-right/refuel-area/VideoMonitor.vue'),
            meta: { title: '视频监控' }
        }

    ]
}
export default RefuelAreaRouter