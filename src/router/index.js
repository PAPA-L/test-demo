/*
 * @Author: PAPA-L 2585277557@qq.com
 * @Date: 2022-08-19 15:23:00
 * @LastEditors: PAPA-L 2585277557@qq.com
 * @LastEditTime: 2022-08-19 17:43:57
 * @FilePath: \test-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
const LOGIN_PAGE_NAME = 'login';//定义login名称
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  
]
router.beforeEach((to, from, next) => {
  const token = 'abc'; // cookie.getToken();
  if (!token && to.name !== LOGIN_PAGE_NAME) {//不存在token且跳转页面名字不为'login'
    //跳转登录页
    next({
      name: LOGIN_PAGE_NAME 
    });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {//不存在token且跳转页面名字为'login'
    // 跳转
    next(); 
  } else if (token && to.name === LOGIN_PAGE_NAME) {//存在token且跳转页面名字为'login'
    // 跳转到home页
    next({
      name: 'Home'
    });
    setTitle(to, router.app);
    // ViewUI.LoadingBar.finish();//ui框架加载进度条
    window.scrollTo(0, 0);
  } else {
    // 特殊页面直接放行
    if (to.meta.noValidatePrivilege) {
      next();
      return;
    }

    // 如果是超管，直接放行
    if (store.state.user.userLoginInfo.isSuperMan) {
      next();
      return;
    }

    // 去掉/之后第一个字母
    let key = to.path.substr(1, 1);
    let pathArray = storeSelf.state.user.privilegeRouterPathMap.get(key);
    if (!(pathArray && pathArray.indexOf(to.path) >= 0)) {
      next({
        name: 'Error401'
      });
    } else {
      next();
    }
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
