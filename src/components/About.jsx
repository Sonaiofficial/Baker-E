import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <h1 className="h1 pb-2 mb-4 text-warning border-bottom border-warning border-4 text-center">About Component</h1>
            <Outlet />
        </div>
    )
}

export default About;