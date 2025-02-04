import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ActivitiesDashbord from "../../feature/activities/dashbord/ActivitiesDashbord";
import ActivityFrom from "../../feature/activities/form/ActivityFrom";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import HomePage from "../../feature/home/HomePage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/', element: <HomePage />
            },
            {
                path: '/activities', element: <ActivitiesDashbord />
            },
            {
                path: '/activities/:id', element: <ActivityDetails />
            },
            {
                path: '/createActivity', element: <ActivityFrom />
            },
        ]
    },
]

export const router = createBrowserRouter(routes);