import Dashboard from "../Components/Hokim/Dashboard";
import Farmer from "../Components/Hokim/Farmer/Index";
import ProvinceDetail from "../Components/Hokim/ProvinceDetail";
import Viloyat from "../Components/Hokim/Viloyat";
import Boyvut from "../Components/Hokim/Viloyat/Boyvut";
import Gulistan from "../Components/Hokim/Viloyat/Gulistan";
import Mirza from "../Components/Hokim/Viloyat/Mirza";
import Oqoltin from "../Components/Hokim/Viloyat/Oqoltin";
import Sardoba from "../Components/Hokim/Viloyat/Sardoba";
import Sayxun from "../Components/Hokim/Viloyat/Sayxun";
import Sirdayo from "../Components/Hokim/Viloyat/Sirdaryo";
import Xovos from "../Components/Hokim/Viloyat/Xovos";




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
    },
    {
        name: 'Tuman 1',
        path: 'Боёвут',
        component: <Boyvut />
    },
    {
        name: 'Tuman 2',
        path: 'Гулистон',
        component: <Gulistan />
    },
    {
        name: 'Tuman 3',
        path: 'Мирзаобод',
        component: <Mirza />
    },
    {
        name: 'Tuman 4',
        path: 'Оқолтин',
        component: <Oqoltin />
    },
    {
        name: 'Tuman 5',
        path: 'Сардоба',
        component: <Sardoba />
    }
    , {
        name: 'Tuman 6',
        path: 'Сайҳунобод',
        component: <Sayxun />
    },
    {
        name: 'Tuman 7',
        path: 'Сирдарё',
        component: <Sirdayo />
    },
     {
        name: 'Tuman 8',
        path: 'Ховос',
        component: <Xovos />
    }
];
