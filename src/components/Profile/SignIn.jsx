import React from "react";

const SignIn = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            {" "}
            <div
                className={`w-[50vh] rounded-md bg-opacity-40 backdrop-blur border-2 border-gray-700 flex flex-col items-center transition duration-1000 ease-in-out`}
            >
                <div className=" w-full h-12 bg-gray-300 bg-opacity-20  backdrop-blur flex flex-row justify-center items-center font-light text-2xl tracking-widest">
                    SIGN IN
                </div>
                <span className="text-black text-md font-light tracking-widest mt-10">
                    WELCOME BACK TO EXAMIFY
                </span>
                <span className="w-4/5 mt-[8vh] tracking-wider">E-MAIL:</span>
                <input
                    type="text"
                    className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="E-mail:"
                />
                <span className="w-4/5 mt-[8vh] tracking-wider">PASSWORD:</span>
                <input
                    type="password"
                    className="h-8 w-4/5 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="Password:"
                />

                <div className="w-4/5 flex flex-row items-center mt-[4vh]">
                    <input
                        type="checkbox"
                        className="h-4 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mr-4"
                    />
                    <div className="w-full text-gray-300">
                        <span className="font-light tracking-wider -mr-10">
                            Remember Me
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className=" bg-gray-200 w-4/5 h-[8vh] text-2xl font-light tracking-widest mt-[4vh] rounded-sm hover:bg-gray-400 transition duration-500 ease-in-out"
                >
                    LOGIN
                </button>

                <span className="font-semibold tracking-wide mb-8 mt-4 italic text-gray-500">
                    Forgot{" "}
                    <span className="underline cursor-pointer">
                        Username / Password?
                    </span>
                </span>
            </div>
        </div>
    );
};

export default SignIn;
