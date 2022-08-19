/*
 * @Author: PAPA-L 2585277557@qq.com
 * @Date: 2022-08-19 15:23:00
 * @LastEditors: PAPA-L 2585277557@qq.com
 * @LastEditTime: 2022-08-19 17:27:22
 * @FilePath: \test-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import importDirective from '@/directives';
importDirective(Vue);

createApp(App).use(store).use(router).mount('#app')
