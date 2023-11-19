import React from "react";

const Mission = () => {
    return (
        <div className="w-full h-full text-white font-poppins">
            <div className="text-6xl font-semibold pt-[20vh] w-full flex flex-row">
                <span className="ml-[18vh] flex flex-row justify-end items-center">
                    Ace your Next Exam
                </span>
                <span className="text-cyan-400">.</span>
            </div>
            <p className="ml-[18vh] mt-10 text-gray-300 text-3xl w-4/5">
                Examif.AI, pronounced "Examify," is a intelligent and efficient exam preperation platform that harnessed the power of AI 
                and ChatGPT to generate <span className="font-bold italic">infinite practice problems</span> based 
                on uploaded course material and past exams. Examif.AI is designed to make exam preparation seamless, 
                personalized, and effective to adapt to your study habits. </p>

            <p className="ml-[18vh] mt-10 text-white text-3xl w-4/5 font-bold italic">Examif.AI is not just an exam preparation 
                tool; it's your personalized guide to exam excellence.</p>
        </div>
    );
};

export default Mission;
