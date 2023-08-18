import { createRouter , createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("../views/HomePage.vue")
    },
    {
        path: "/registrar",
        name: "RegistrarNota",
        component: () => import("../views/RegistrarNota.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;