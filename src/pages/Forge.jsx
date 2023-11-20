import React from "react";
import { NavbarF, Forged, Forgery } from "../components";

const Forge = () => {
    return (
        <div className="bg-[#1a1a1a] w-screen h-full text-white">
            <div>
                <NavbarF />
            </div>
            
            <div className="mt-16">
                <Forged />
            </div>
            <div className="w-screen h-full bg-gray-600">
                <Forgery />
            </div>

        </div>
    );
};

export default Forge;
