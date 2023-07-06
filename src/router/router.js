export const routes = [
  { path: "/", name: "Home", meta: { auth: false }, component: () => import("../views/Home.vue") },
  { path: "/about", name: "About", meta: { auth: false }, component: () => import("../views/About.vue") },
  { path: "/login", name: "Login", meta: { auth: false }, component: () => import("../views/Login.vue") },
];
