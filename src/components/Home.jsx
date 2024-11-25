import React, { useEffect, useState } from 'react';

const Home = () => {

    const URL = "https://quotes-api-self.vercel.app/quote";

    const [quote, setQuote] = useState("");

    useEffect(()=>{
       document.title = "OrganizeMe" 
    },[])

    useEffect(()=>{
       (async ()=>{
            const response = await fetch(URL);
            const data =await response.json();
            setQuote(data)
       })()
    },[])


    const progress = 50

    const [isChecked, setIsChecked] = useState(false)

    const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    }


    return (
        <div className='mb-10'>

            {/* Quote */}
            <div className='mt-4'>
                <figure className="max-w-screen-md mx-auto text-center">
                    <svg
                        className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                    >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <blockquote>
                        <p className="text-2xl w-[90%] m-auto italic font-medium text-gray-900 dark:text-white">
                            "{quote.quote}"
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                                -{quote.author}
                            </cite>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <div className='w-[90%] m-auto h-[1px] mt-10 bg-gray-300'></div>


            <div className='w-[95%] flex flex-col lg:flex-row lg:justify-between m-auto mt-10 pb-20 lg:pb-0'>

                {/* left side bar */}
                <div className='lg:w-2/3 pb-6'>
                    {/* Tasks */}
                    <h1 className="text-2xl font-extrabold mt-7 flex w-full justify-center lg:mt-10">You Have 3 tasks for today.</h1>
                    <h1 className="text-xl font-bold mt-1 flex w-full justify-center lg:mt-1">{date}</h1>
                    <div className="text-2xl font-extrabold mt-3 flex flex-col w-full items-center ">
                        <div>Completed : <span className='pr-1 text-green-500'>1 </span></div>
                        <div>Pending : <span className='pr-1 pl-1 text-blue-600'> 2 </span></div>
                    </div>


                    {/* tasks today*/}
                    <div>
                        <div className="w-[90%] lg:w-[600px] mt-3 pl-3 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">
                            <input
                                type="checkbox"
                                name="taskComplete"
                                id="task"
                                onClick={handleCheckBox}
                            />

                            <div className="flex flex-col w-[70%] md:w-[80%]">
                                {/* text-xl text-white */}
                                <div className={isChecked ? "text-xl text-white line-through" : "text-xl text-white"}>
                                    I am a demo task
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold mt-3 flex w-full justify-center lg:mt-15">OverAll Progress for Today</h1>

                        <div className="w-[90%] m-auto lg:w-[50%] mt-5 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-blue-600 text-xl font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: `${progress}%` }}
                            >
                                {progress}%
                            </div>
                        </div>

                    </div>
                </div>

            <div className='w-[90%] m-auto h-[.5px] mt-10 bg-gray-300 sm:hidden'></div>


                {/* right side bar */}
                <div className='lg:w-1/3 h-10 mt-5'>
                    <h1 className="text-2xl font-extrabold mt-3 flex w-full justify-center lg:mt-10">Upcomming Tasks</h1>
                    <div className="w-[95%] lg:w-[350px] mt-3 pl-7 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">
                        <div className="flex flex-col w-[70%] lg:w-[80%]">
                            {/* text-xl text-white */}
                            <div className={isChecked ? "text-xl text-white line-through" : "text-xl text-white"}>
                                I am a demo task
                            </div>
                            <div className="text-xs">
                                {date}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 