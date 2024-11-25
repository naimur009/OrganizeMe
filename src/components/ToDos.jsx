import { useState, useEffect } from "react";


const ToDos = () => {

    useEffect(() => {
        document.title = "OrganizeMe - To-Dos"
    }, [])

    const [todoToggle, setToDoToggle] = useState(false);

    const [isChecked, setIsChecked] = useState(false)

    const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });


    const handleNewToDo = () => {
        setToDoToggle(!todoToggle);
    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            {/* add to to do form */}
            <form className='w-[95%] md:w-[500px] m-auto mt-10'>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    {/* <!-- Search Input --> */}
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-2 pl-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="+ Add task"
                        required
                        autoComplete="off"
                        onClick={handleNewToDo}
                    />
                </div>
                {/* buttons */}
                {
                    todoToggle &&
                    <div className='flex justify-center gap-5 mt-3'>
                        {/*  date */}
                        <div className='w-[250px]'>
                            <div class="relative w-full">
                                {/* <!-- Icon --> */}
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                {/* <!-- Date Input --> */}
                                <input
                                    type="date"
                                    class="block w-full pl-10 p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        {/* add button */}
                        <button className='py-0 rounded-lg px-9 text-xl bg-blue-500'>
                            Add
                        </button>


                    </div>
                }

            </form>



            {/* show tasks */}
            <h1 className="text-2xl font-extrabold mt-7 ml-5 md:flex md:w-full md:justify-center md:mt-10">Your Tasks</h1>

            <div className="w-[95%] md:w-[600px] mt-3 pl-3 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">
                <input
                    type="checkbox"
                    name="taskComplete"
                    id="task"
                    onClick={handleCheckBox}
                />

                <div className="flex justify-between items-center w-full">
                    {/* text-xl text-white */}
                    <div className="flex flex-col">
                        <div className={isChecked ? "text-xl text-white line-through" : "text-xl text-white"}>
                            I am a demo task
                        </div>

                        <div className="text-xs">
                            {date}
                        </div>
                    </div>

                    <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/bin.png" alt="" /></button>


                </div>


            </div>

            <div className="w-[95%] md:w-[600px] mt-3 pl-3 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">
                <input
                    type="checkbox"
                    name="taskComplete"
                    id="task"
                    onClick={handleCheckBox}
                />

                <div className="flex justify-between items-center w-full">
                    {/* text-xl text-white */}
                    <div className="flex flex-col">
                        <div className={isChecked ? "text-xl text-white line-through" : "text-xl text-white"}>
                            I am a demo task
                        </div>

                        <div className="text-xs">
                            {date}
                        </div>
                    </div>

                    <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/bin.png" alt="" /></button>


                </div>


            </div>

            <div className="w-[95%] md:w-[600px] mt-3 pl-3 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">
                <input
                    type="checkbox"
                    name="taskComplete"
                    id="task"
                    onClick={handleCheckBox}
                />

                <div className="flex justify-between items-center w-full">
                    {/* text-xl text-white */}
                    <div className="flex flex-col">
                        <div className={isChecked ? "text-xl text-white line-through" : "text-xl text-white"}>
                            I am a demo task
                        </div>

                        <div className="text-xs">
                            {date}
                        </div>
                    </div>

                    <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/bin.png" alt="" /></button>

                </div>
            </div>


        </div>
    );
};

export default ToDos;