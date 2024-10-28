import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import BaseLayout from "../layouts";
import Beranda from "../pages/Beranda";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            errorElement: <div>Error</div>,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
