import Dashboard from "../Components/Hokim/Dashboard";
import Farmer from "../Components/Hokim/Farmer/Index";
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
        component: <ProvinceDetail />
    },
    {
        name: 'Tuman detail',
        path: '1/:name',
        component: <Farmer />
    }
];
