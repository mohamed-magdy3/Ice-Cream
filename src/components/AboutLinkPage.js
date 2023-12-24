import React from "react";
import About from "./AboutUs";
import Exp from "./Experience";

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-center pt-5 fw-bold bg-light">About Section</h1>
            <About/>
            <Exp/>
        </div>
    )

}