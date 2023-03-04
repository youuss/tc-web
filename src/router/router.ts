/**
 * @Description
 * @Author youus
 * @Date 2023/2/27 20:57
 * @Version v1.0.0
 *
 * Hello, humor
 */

import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecord } from "vue-router";

const routes: RouteRecord[] = [
  {
    path:'/',
    name:'main',
    component: () => import('@/page/Main.vue'),
    children: [
      {
        path:'/',
        name:'main',
        component: () => import('@/page/Home.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
