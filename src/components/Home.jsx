import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPending, deletePrev } from "../Features/toDos/todosSlice";


const Home = () => {

    const URL = "https://quotes-api-self.vercel.app/quote";

    const [quote, setQuote] = useState("");


    useEffect(() => {
        document.title = "OrganizeMe"
    }, [])

    useEffect(() => {
        (async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setQuote(data)
        })()
    }, [])

    const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to zero-based month
        const day = String(date.getDate()).padStart(2, "0");
        const currentDate = (`${year}-${month}-${day}`); // Logs: "2024-11-28"
        return currentDate;
    }

    function getNextDay(currentDate) {
        const date = new Date(currentDate);  // Clone the current date to avoid modifying the original date
        date.setDate(date.getDate() + 1);   // Add one day to the date
        return date;  // Return the next day as a Date object
    }

    function getPrevDay(currentDate) {
        const date = new Date(currentDate);  // Clone the current date to avoid modifying the original date
        date.setDate(date.getDate() - 1);   // Add one day to the date
        return date;  // Return the next day as a Date object
    }

    const today = formatDate(new Date());

    const prev = formatDate(getPrevDay(today));

    const fullData = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(deletePrev(prev))
    }, [])


    const data = fullData.filter((todo) => {
        return today == todo.date
    })

    const nextDay = formatDate(getNextDay(today));


    const upCommingData = fullData.filter((todo) => {
        return nextDay == todo.date
    })


    const [complete, setComplete] = useState(0);
    const [pending, setPending] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleStatus = (e) => {
        dispatch(editPending(e))
    }


    useEffect(() => {
        const completeTask = data.filter((todo) => {
            return todo.pending === false
        })
        const pendingTask = data.filter((todo) => {
            return todo.pending === true
        })

        setComplete(completeTask.length);
        setPending(pendingTask.length);
        data?.length > 0 ? setProgress((progress) => Math.round((complete / data.length) * 100)) : setProgress(0)
    }, [handleStatus])



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
                        <p className="text-xl w-[90%] m-auto italic font-medium text-gray-900 dark:text-white">
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
                    <h1 className="text-2xl font-extrabold mt-7 flex w-full justify-center lg:mt-10">You Have {data?.length} tasks for today.</h1>
                    <h1 className="text-base  mt-1 flex w-full justify-center lg:mt-1">{date}</h1>
                    {/* <div className="text-xl font-medium mt-3 flex flex-col w-full items-center ">
                        <div>Completed : <span className='pr-1 text-green-500'>{complete}</span></div>
                        <div>Pending : <span className='pr-1 pl-1 text-blue-600'>{pending}</span></div>
                    </div> */}

                    {
                        data?.length
                            ? <div className="text-xl font-medium mt-3 flex flex-col w-full items-center ">
                                <div>Completed : <span className='pr-1 text-green-500'>{complete}</span></div>
                                <div>Pending : <span className='pr-1 pl-1 text-blue-600'>{pending}</span></div>
                            </div>
                            : <div></div>
                    }


                    {/* tasks today*/}
                    {
                        data?.length ? data.map((task) => {
                            return (
                                <div
                                    className="w-[95%] md:w-[600px] mt-3 pl-3 p-2 bg-gray-700 m-auto rounded-lg flex gap-5"
                                    key={task.id}
                                >
                                    <input
                                        type="checkbox"
                                        name="taskComplete"
                                        id="task"
                                        checked={task.pending === false}
                                        onChange={() => {
                                            handleStatus(task.id)
                                        }}
                                    />

                                    <div className="flex justify-between items-center w-full">
                                        {/* text-xl text-white */}
                                        <div className="flex flex-col">
                                            <div className={!task.pending ? "text-base text-white line-through" : "text-base text-white"}>
                                                {task.task}
                                            </div>

                                            <div className="text-xs">

                                                {
                                                    new Date(task.date).toLocaleDateString("en-US", {
                                                        month: "long",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })

                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )

                        })
                            : <div></div>
                    }


                    {
                        data?.length > 0
                            ? <div className='w-full'>
                                <h1 className="text-2xl font-extrabold mt-3 flex w-full justify-center lg:mt-15">OverAll Progress for Today</h1>

                                <div className="w-[90%] m-auto lg:w-[50%] mt-5 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        className="bg-blue-600 text-xl font-medium text-blue-100 text-center leading-none rounded-full"
                                        style={{ width: `${progress}%` }}
                                    >
                                        {progress}%
                                    </div>
                                </div>
                            </div>
                            : <div> </div>
                    }


                </div>



                <div className='w-[90%] m-auto h-[.5px] mt-10 bg-gray-300 sm:hidden'></div>


                {/* right side bar */}
                <div className='lg:w-1/3 h-10 mt-5'>
                    <h1 className="text-2xl font-extrabold mt-3 flex w-full justify-center lg:mt-10">Upcomming Tasks</h1>


                    {
                        upCommingData?.length ? upCommingData.map((task) => {
                            return (
                                <div
                                    className="w-[95%] md:w-[600px] lg:w-[300px] xl:w-[400px] mt-3 pl-3 p-1 bg-gray-700 m-auto rounded-lg flex gap-5"
                                    key={task.id}
                                >

                                    <div className="flex justify-between items-center w-full pl-3">
                                        {/* text-xl text-white */}
                                        <div className="flex flex-col">
                                            <div className={!task.pending ? "text-base text-white line-through" : "text-base text-white"}>
                                                {task.task}
                                            </div>

                                            <div className="text-xs">
                                                {/* {task.date} */}

                                                {
                                                    new Date(task.date).toLocaleDateString("en-US", {
                                                        month: "long",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })

                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )

                        })
                            : <div className="text-base flex justify-center mt-5">No task for tomorrow</div>
                    }
                </div>


            </div>
        </div>
    );
};

export default Home; 