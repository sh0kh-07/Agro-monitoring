import Dashboard from "../Components/Hokim/Dashboard";
import ProvinceDetail from "../Components/Hokim/ProvinceDetail";
import Viloyat from "../Components/Hokim/Viloyat";

export const HokimRoutes = [
    {
        name: 'dashboard',
        path: 'dashboard',
        component: <Dashboard />
    },
    {
        name: 'Viloyat',
        path: 'province',
        component: <Viloyat />
    },
    {
        name: 'Viloyat detail',
        path: 'province/:name',
        component: <ProvinceDetail  />
    }
]