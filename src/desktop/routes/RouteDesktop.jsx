import React from 'react';
import {RouterProvider} from "react-router";
import {routesDesktop} from "./const/routesDesktop";

export const RouteDesktop = () => {
    return (
        <RouterProvider router={routesDesktop} />
    );
};

