import React from "react";
const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:your-backend-port/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({ key: 'value' }), // Your request payload
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
const SignIn = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            {" "}
            <div
                className={`w-[80vh] rounded-md bg-opacity-40 backdrop-blur border-2 border-gray-700 flex flex-col items-center transition duration-1000 ease-in-out`}
            >
                <div className=" w-full h-12 bg-blue-600 bg-opacity-20  backdrop-blur flex flex-row justify-center items-center font-light text-2xl tracking-widest">
                    SIGN UP
                </div>
                <span className="text-black text-md font-light tracking-widest mt-10">
                    WELCOME TO EXAMIFAI
                </span>

                <span className="w-4/5 mt-[2vh] tracking-wider">
                    FIRST NAME:
                </span>
                <input
                    type="text"
                    className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="ie: John"
                />

                <span className="w-4/5 mt-[2vh] tracking-wider">
                    LAST NAME:
                </span>
                <input
                    type="text"
                    className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="ie: Doe"
                />

                <span className="w-4/5 mt-[2vh] tracking-wider">E-MAIL:</span>
                <input
                    type="text"
                    className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="E-mail:"
                />

                <span className="w-4/5 mt-[2vh] tracking-wider">PASSWORD:</span>
                <input
                    type="password"
                    className="h-8 w-4/5 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="Create a password:"
                />

                <span className="w-4/5 mt-[2vh] tracking-wider">CONFIRM PASSWORD:</span>
                <input
                    type="password"
                    className="h-8 w-4/5 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-white bg-opacity-70 border-2 border-gray-300 mt-4"
                    placeholder="Should be the same as the password above."
                />

                <button
                    type="submit"
                    className=" bg-gray-200 w-4/5 h-[56px] text-2xl font-light tracking-widest mt-[4vh] rounded-sm hover:bg-gray-400 transition duration-500 ease-in-out"
                >
                    CONFIRM
                </button>

                <span className="font-semibold tracking-wide mb-8 mt-4 italic text-gray-500">
                    Or{" "}
                    <span className="underline cursor-pointer">
                        Log in with an Existing Account
                    </span>
                </span>
            </div>
        </div>
    );
};

export default SignIn;
