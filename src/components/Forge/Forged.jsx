import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";

const Forged = () => {
    const hober = useLoader(GLTFLoader, "./anvil.glb");
    return (
        <div className="bg-[#1a1a1a] flex flex-row h-screen w-screen justify-center overflow-visible backdrop-blur-sm">
            <div className="w-1/2 mt-[20vh] font-poppins flex flex-col justify-center items-center">
                <span className="text-orange-500 font-bold tracking-widest text-6xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)] whitespace-nowrap">
                    FORGE
                </span>
                <span className="text-gray-300 italic text-3xl drop-shadow-none mt-4 font-light tracking-wide">
                    The World's First AI-Powered Exam Generator
                </span>
            </div>
            <div className="w-1/2">
                <Canvas>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 6, 20]}
                        fov={70}
                        rotation={[0, 0, 0]}
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
                    <PresentationControls>
                        <group position={[0, 0, 0]} rotation={[0, 2, 0]}>
                            <primitive object={hober.scene} />
                        </group>
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
};

export default Forged;
