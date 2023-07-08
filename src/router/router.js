export const routes = [
  {
    path: "/",
    component: () => import("../layouts/Dashboard.vue"),
    children: [
      { path: "", name: "Index", meta: { auth: false }, component: () => import("../views/home/Index.vue") },
      { path: "test", name: "Test", meta: { auth: false }, component: () => import("../views/home/Chart.vue") },
      { path: "about", name: "About", meta: { auth: false }, component: () => import("../views/home/About.vue") },
    ],
  },
  { path: "/login", name: "Login", meta: { auth: false }, component: () => import("../views/Login.vue") },
];
