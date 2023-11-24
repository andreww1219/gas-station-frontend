# 加油站安全隐患检测系统前端v2.0
## 路由更改
### 一级路由:
- /			根路由		redirect:/refuel-area/img	加油区图像处理
- /auth		用户页面	redirect:/auth/login		登录
- /work-space	工作区		redirect:/refuel-area.img	加油去图像处理
### 二级路由:
- /auth:		用户页面
  - /auth/login			登录
  - /auth/register			注册
  - /auth/retrieve-password找回密码
- /work-space:	工作区
  - /refuel-area	加油区	redirect:/refuel-area/img	加油区图像处理
  - /unload-area	卸油区	redirect:/unload-area/img	卸油区图像处理
  - /manage		后台管理 redirect:/manage/user		后台管理用户管理
- /security		安全措施 redirect:/security/regulations 安全措施安全条例
### 三级路由:
- /refuel-area	加油区
  - /refuel-area/img		加油区图像处理
  - /refuel-area/video		加油区视频监控
- /unload-area	卸油区
  - /unload-area/img		卸油区图像处理
  - /unload-area/video		卸油区视频监控
- /manage		后台管理
  - /manage/user			后台管理用户管理
  - /manage/task			后台管理任务管理
- /security		安全措施
  - /security/regulations		安全措施安全条例
  - /security/emergency-plan	安全措施应急预案
  - /security/contact-phone		安全措施联系电话
