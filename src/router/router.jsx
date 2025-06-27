import { createBrowserRouter } from 'react-router-dom';
import DonutDetail from '../pages/DonutDetail';
import App from '../pages/App';
import Donuts from '../pages/Donuts';
import Locations from '../pages/Locations';
import Layout from "../layouts/Layout";
import TasteChocolate from '../pages/TasteChocolate';
import TasteWhiteChocolate from '../pages/TasteWhiteChocolate';
import TasteStrawberry from '../pages/TasteStrawberry';

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
            },

            {
                path: '/taste-chocolate',
                element: <TasteChocolate />
            },

            {
                path: '/taste-white-chocolate',
                element: <TasteWhiteChocolate />
            },

             {
                path: '/taste-strawberry',
                element: <TasteStrawberry />
            }

        ]
    }
])

export default router;