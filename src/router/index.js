import { createRouter, createWebHistory, useRoute } from "vue-router";
// import { useAuthStore } from "../stores/auth";
import { routes } from "./router";
const router = createRouter({
  history: createWebHistory("/admin"),
  routes,
});

router.beforeEach((to, from, next) => {
  // const route = useRoute();

  console.log("router.to", to);
  next();

  // const authStore = useAuthStore();
  // 下一頁需要判斷是否有權限
  // if (to.meta.auth) {
  //   if (authStore.token) {
  //     next(); // 如果 token 存在, 到下一頁
  //   } else {
  //     next("/login"); // token 不存在, 跳轉到 login 頁面
  //   }
  // } else {
  //   next(); // 不用判斷, 到下一頁
  // }
});
export default router;
