import { createBrowserRouter, Navigate } from "react-router-dom";
import SiteLayout from "@pages/Layouts/SiteLayout";

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
                element: <h1>Rent</h1>,
            },
            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
]);
