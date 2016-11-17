/**
 * Created by yy on 16/10/17.
 */
import Login from '../views/Login'
import Index from '../views/Index'

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/',
        component: Index
    }
];
