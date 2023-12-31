import React from "react";
import { White_back } from "../../assets";

const NavbarP = () => {
    return (
        <div
            className="fixed top-0 left-0 h-16 w-screen bg-gray-200 
        overflow-hidden flex flex-row items-center justify-start  z-50"
        >
            <img src={White_back} className="ml-16 h-12" />

            <div
                className="flex flex-row gap-12 text-light 
            tracking-widest text-black ml-[90vh] text-sm"
            >
                <a href={`/`}>
                    <span className="hover:underline decoration-red-500 cursor-pointer transition duration-200 ease-in-out text-black font-light font-poppins">
                        HOME
                    </span>
                </a>
                <a href={`/forge`}>
                    <span className="hover:underline decoration-red-500 cursor-pointer transition duration-200 ease-in-out text-black font-light font-poppins">
                        THE FORGE
                    </span>
                </a>
                <a href={`/profile`}>
                    <span className="underline decoration-red-500 cursor-pointer transition duration-200 ease-in-out text-black font-light font-poppins">
                        PROFILE
                    </span>
                </a>
            </div>
        </div>
    );
};

export default NavbarP;
