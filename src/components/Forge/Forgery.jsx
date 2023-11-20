import React, { useEffect, useState } from "react";
import m1 from "./temp/221_M1.json";
import m5 from "./temp/221_M5.json";
import m7 from "./temp/213_M7.json";
import m8 from "./temp/213_M8.json";
const Forgery = () => {
    const [menu, setMenu] = useState("0");
    const [ButtonStatus, setButtonStatus] = useState(true);
    const [Loading, setLoading] = useState(false);
    const mj1 = JSON.stringify(m1);
    const mj5 = JSON.stringify(m5);
    const mj7 = JSON.stringify(m7);
    const mj8 = JSON.stringify(m8);

    const handleMenuChange = (event) => {
        generator()
        setTimeout(() => {
            setMenu(event.target.value);
        }, 5000)
        setLoading(false)
    };

    const generator = () => {
        // Do something with the selected menu value
        setButtonStatus(true);
        setLoading(true);
        // You can add your logic here to generate the exam based on the selected menu
    };

    let questionsList = [];
    let answersList = [];

    function parseQuestionsData(filePath) {
        // Initialize empty arrays to store questions, answers, and solutions

        const rawData = fs.readFileSync(filePath, "utf8");
        // Parse the raw data into a JavaScript object
        const data = JSON.parse(rawData);

        questionsList = [];
        answersList = [];

        // Loop through the questions data
        data.questions.forEach((item) => {
            // Push question, answer, and solution to respective arrays
            questionsList.push(item.question);
            answersList.push(item.answer);
            answersList.push(item.solution);

            console.log("aa");
        });

        // Return an object containing the three arrays
    }

    useEffect(() => {
        // You can add any additional logic here that should run on menu change
        // For example, if you want to fetch data based on the selected menu, make an API call, etc.
    }, [menu]);

    return (
        <div className="flex flex-col justify-center items-center pb-36">
            <div className="text-6xl font-poppins font-bold tracking-widest text-orange-500 mt-[10vh]">
                FORGE EXAM GENERATOR
            </div>
            <label htmlFor="menu" className="text-white tracking-widest mt-4">
                SELECT A COURSE:
            </label>
            <select
                id="menu"
                value={menu}
                onChange={handleMenuChange}
                className="mt-2 p-2"
            >
                <option className="text-black" value="1">
                    CPSC 221 Mod 1
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 2
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 3
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 4
                </option>
                <option className="text-black" value="5">
                    CPSC 221 Mod 5
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 6
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 7
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 8
                </option>

                <option className="text-black" value="1">
                    CPSC 221 Mod 1
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 2
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 3
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 4
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 5
                </option>
                <option className="text-black" value="1">
                    CPSC 221 Mod 6
                </option>
                <option className="text-black" value="7">
                    CPSC 213 Mod 7
                </option>
                <option className="text-black" value="8">
                    CPSC 213 Mod 8
                </option>
                {/* Add other options as needed */}
            </select>

            <button
                onClick={() => {
                    setButtonStatus(false);
                }}
                className={`mt-4 p-2  ${
                    ButtonStatus ? "bg-blue-500" : "bg-gray-500"
                }  transition duration-200 ease-in-out text-white`}
            >
                Generate!
            </button>

            <div className={`animate-pulse ${Loading ? "flex" : "hidden"}`}>Generating your Exam. Please be patient.</div>

            <div
                className={`${((menu === "1") && !ButtonStatus) ? "flex": "hidden"} flex-col justify-center items-start mt-12 w-4/5`}
            >
                <span className={`text-3xl font-bold font-poppins`}>
                    QUESTIONS:
                </span>
                <ul>
                    {JSON.parse(mj1)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index <= 1) {return <div className={`my-2 ${(index == 1) ? "font-light" : "font-bold text-blue-600"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
                <span className={`text-3xl font-bold font-poppins`}>
                    ANSWERS:
                </span>
                <ul>
                    {JSON.parse(mj5)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index > 1) {return <div className={`my-2 ${(index == 3) ? "font-light" : "font-bold text-red-500"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
            </div>

            <div
                className={`${((menu === "5") && !ButtonStatus) ? "flex": "hidden"} flex-col justify-center items-start mt-12 w-4/5`}
            >
                <span className={`text-3xl font-bold font-poppins`}>
                    QUESTIONS:
                </span>
                <ul>
                    {JSON.parse(mj5)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index <= 1) {return <div className={`my-2 ${(index == 1) ? "font-light" : "font-bold text-blue-600"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
                <span className={`text-3xl font-bold font-poppins`}>
                    ANSWERS:
                </span>
                <ul>
                    {JSON.parse(mj1)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index > 1) {return <div className={`my-2 ${(index == 3) ? "font-light" : "font-bold text-red-500"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
            </div>

            <div
                className={`${((menu === "7") && !ButtonStatus) ? "flex": "hidden"} flex-col justify-center items-start mt-12 w-4/5`}
            >
                <span className={`text-3xl font-bold font-poppins`}>
                    QUESTIONS:
                </span>
                <ul>
                    {JSON.parse(mj7)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index <= 1) {return <div className={`my-2 ${(index == 1) ? "font-light" : "font-bold text-blue-600"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
                <span className={`text-3xl font-bold font-poppins`}>
                    ANSWERS:
                </span>
                <ul>
                    {JSON.parse(mj7)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index > 1) {return <div className={`my-2 ${(index == 3) ? "font-light" : "font-bold text-red-500"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
            </div>


            <div
                className={`${((menu === "8") && !ButtonStatus) ? "flex": "hidden"} flex-col justify-center items-start mt-12 w-4/5`}
            >
                <span className={`text-3xl font-bold font-poppins`}>
                    QUESTIONS:
                </span>
                <ul>
                    {JSON.parse(mj8)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index <= 1) {return <div className={`my-2 ${(index == 1) ? "font-light" : "font-bold text-blue-600"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
                <span className={`text-3xl font-bold font-poppins`}>
                    ANSWERS:
                </span>
                <ul>
                    {JSON.parse(mj8)["questions"].map((object) => {
                        return Object.values(object).map((value, index) => {
                            if (index > 1) {return <div className={`my-2 ${(index == 3) ? "font-light" : "font-bold text-red-500"}`}><li key={index}>{value}</li></div>};
                        });
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Forgery;
