import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {DesktopMain} from "../../components/pages/DesktopMain";
import FavoriteItems from "../../components/pages/favoriteItems/FavoriteItems";

export const routesDesktop  = createBrowserRouter([
    {
        path: "/",
        element: (<DesktopMain/>),
    },
    {
        path: "/favorite",
        element: <FavoriteItems/>,
    },
]);