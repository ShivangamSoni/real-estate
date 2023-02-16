import { createBrowserRouter, Navigate } from "react-router-dom";

import SiteLayout from "@pages/Layouts/SiteLayout";
import Rent from "@pages/Rent";

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
            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
]);
