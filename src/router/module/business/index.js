/*
 * @Author: PAPA-L 2585277557@qq.com
 * @Date: 2022-08-19 17:49:30
 * @LastEditors: PAPA-L 2585277557@qq.com
 * @LastEditTime: 2022-08-19 17:51:35
 * @FilePath: \test-demo\src\router\module\business\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Main from '@/components/main';

import { notice } from './notice';

// 业务
export const business = [
  {
    path: '/business',
    name: 'Business',
    component: Main,
    meta: {
      title: '业务功能',
      topMenu: true,
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      ...notice,
    ]
  }
];
