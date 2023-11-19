import React from "react";
import { NavbarH } from "../components";
import { DNEBG } from "../assets";

const DNE = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="z-10">
                <NavbarH />
            </div>
            <div className="h-screen w-screen flex flex-row justify-center items-center mt-16">
                <img src={DNEBG} className="h-full relative" />
                <div className="absolute h-screen w-screen backdrop-blur-md flex flex-col justify-center items-center text-5xl font-bold italic">
                    <span className="text-9xl">Sorry!</span>
                    This page doesn't exist. Did you type in the right URL?
                </div>
            </div>
        </div>
    );
};

export default DNE;
