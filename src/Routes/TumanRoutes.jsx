import Dashboard from "../Components/Hudud/Dashboard";
import FermerPage from "../Components/Hudud/FermerPage/FermerPage";
import HududlarPage from "../Components/Hudud/HududlarPage/HududlarPage";

export const TumanRoutes = [
    {
        name: 'dashboard',
        path: 'dashboard',
        component: <Dashboard />
    },
    {
        name: 'reports',
        path: 'reports',
        component: <div>Reports Page</div>
    },
    {
        name: 'hududlar',
        path: "hududlar",
        component: <HududlarPage />,
    },
    {
        name: 'fermer',
        path: "hudud/:id",
        component: <FermerPage />,
    },
]