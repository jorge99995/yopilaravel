import Dashboard from './Components/Dashboard/Dashboard.vue'
import Usuarios from './Components/Usuarios/Index.vue'
export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: Usuarios
    },
];