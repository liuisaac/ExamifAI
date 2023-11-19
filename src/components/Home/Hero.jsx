import React, { useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useMousePosition } from "./useMousePosition";
import { PerspectiveCamera } from "@react-three/drei";

const Hero = () => {
    const hober = useLoader(GLTFLoader, "./torus.glb");
    const position = useMousePosition();
    return (
        <div className="mt-16 flex flex-row h-screen w-screen justify-center overflow-visible backdrop-blur-sm bg-white bg-opacity-70">
            <div className="absolute mt-[40vh] font-poppins flex flex-col justify-center items-center">
                <span className="text-red-500 font-bold tracking-widest text-[5.5rem] drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)] whitespace-nowrap">
                    "PRACTICE MAKES PERFECT"
                </span>
                <span className="text-gray-700 italic text-3xl drop-shadow-none mt-12 font-light tracking-[1rem] ">
                    Next Generation AI-Powered Exam Tools
                </span>
            </div>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[-5.6, 0.6, 3]}
                    fov={30}
                    rotation={[0.2, -1, 0.1]}
                />
                <directionalLight
                    color="white"
                    position={[200, -100, -500]}
                    intensity={0.5}
                />
                <directionalLight
                    color="white"
                    position={[-30, 100, 30]}
                    intensity={6}
                />
                <directionalLight
                    color="white"
                    position={[-30, -100, 30]}
                    intensity={6}
                />
                <directionalLight
                    color="white"
                    position={[-30, -100, -30]}
                    intensity={6}
                />
                <ambientLight />
                <group
                    position={[-1, 0, 0]}
                    rotation={[0, (-(3 * 1) / 2000) * position.x + 0.3, 0]}
                >
                    <primitive object={hober.scene} />
                </group>
            </Canvas>
        </div>
    );
};

export default Hero;
