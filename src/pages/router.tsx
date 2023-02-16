import { createBrowserRouter, Navigate } from "react-router-dom";

import SiteLayout from "@pages/Layouts/SiteLayout";

import Rent from "@pages/Rent";
import NotFound from "@pages/NotFound";

export const router = createBrowserRouter([
    {
        element: <SiteLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/rent" />,
            },
            {
                path: "/rent",
                element: <Rent />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
