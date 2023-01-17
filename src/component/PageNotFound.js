import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";


const PageNotFound = () => {
    return (
        <div>
            <Hero text="404: Page not found"/>

            <Link className="nav-link active home-link" aria-current="page" to="/"> Return to Home</Link>
            
        </div>

    )
}

export default PageNotFound;
