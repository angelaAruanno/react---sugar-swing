import { createBrowserRouter } from 'react-router-dom';
import DonutDetail from '../pages/DonutDetail';
import App from '../pages/App';
import Donuts from '../pages/Donuts';
import Locations from '../pages/Locations';
import Layout from "../layouts/Layout";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },

            {
                path: '/donuts',
                element: <Donuts />
            },
            {
                path: '/locations',
                element: <Locations />
            },
            {
                path: '/donuts/:id',
                element: <DonutDetail />
            }

        ]
    }
])

export default router;