import React from "react";
import { Outlet } from "react-router-dom";

const Bakers = () => {
    return (
        <div className="container">
            <h1 className="h1 pb-2 mb-4 text-warning border-bottom border-warning border-4 text-center">Bakers Component</h1>
            <Outlet />
        </div>
    )
}

export default Bakers;