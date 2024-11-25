import { useState, useEffect } from "react";
import trash from "../assets/bin.png"


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

                    <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={() => {
                            props.isView()
                            handleDelete(note[0]?.id)
                        }}
                    >
                        <svg className='h-5 w-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#dc0404" d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                    </button>


                </div>


            </div>




        </div>
    );
};

export default ToDos;