import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import BaseLayout from "../layouts/BaseLayout";
import Beranda from "../pages/Beranda";
import ServiceKami from "../pages/ServiceKami";
import Blog from "../components/Blog.jsx/Blog";
import Login from "../pages/Login";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            errorElement: <div>Error</div>,
            children: [
                {
                    path: "/",
                    element: <Beranda/>,
                },
                {
                    path: "/service-kami",
                    element: <ServiceKami />,
                },
                {
                    path: "/blog",
                    element:<Blog />,
                },
                {
                    path: "/login",
                    element: <Login />,
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
