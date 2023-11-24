// 根据一级路由生成二级路由

export default function generateRoutes(type){
    const routes = []
    switch (type) {
        case '加油区':
            routes.push({title: '图像处理', url: '/refuel-area/img'})
            routes.push({title: '视频监控', url: '/refuel-area/video'})
            break
        case '卸油区':
            routes.push({title: '图像处理', url: '/unload-area/img'})
            routes.push({title: '视频监控', url: '/unload-area/video'})
            break
        case '后台管理':
            routes.push({title: '用户管理', url: '/manage/user'})
            routes.push({title: '任务管理', url: '/manage/task'})
            break
        case '安全措施':
            routes.push({title: '安全条例', url: '/secure/regulations'})
            routes.push({title: '应急预案', url: '/secure/emergency-plan'})
            routes.push({title: '联系电话', url: '/secure/contact-phone'})
            break
    }
    return routes
}
