import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import View from "./View";

const Notes = () => {

    useEffect(()=>{
        document.title = "OrganizeMe - Notes" 
     },[])

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // You can add the logic to handle the search request here
    };
    const [searchQuery, setSearchQuery] = useState("");

    const [view, setView] = useState(false);

    const isView = () => {
        console.log(view);
        setView(!view);
    }


    return (
        <div className="overflow-x-hidden">
            <div>
                <form className="flex items-center w-[95%] max-w-sm mx-auto mt-5" onSubmit={handleSearchSubmit}>
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Note"
                            required
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ms-2 w-20 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center"
                    >
                        <svg
                            className="w-4 h-4v"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>

                </form>

                <button onClick={toggleOpen}>
                    <img className="h-14 fixed bottom-6 right-4 md:bottom-10 md:right-10" src="/src/assets/add-button.png" alt="Add-Note" />
                </button>


            </div>

            {
                isOpen &&
                <NoteForm toggle={toggleOpen} />
            }


            {/* notes section */}

            <div className="w-[95%] md:w-[95%] m-auto p-1 md:p-10 columns-2 sm:columns-3 lg:columns-4 xl:col-span-5">

                <div className="w-[100%] max-w-[320px] mb-4 break-inside-avoid">
                    <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:cursor-pointer " onClick={isView}>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse flex-col">

                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    this is the tittle
                                </span>
                            </div>
                        </div>
                        <p className="text-sm font-normal py-4 text-gray-900 dark:text-white line-clamp-6	">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt omnis at cumque doloribus numquam, cum perferendis. Quae vero aliquam consectetur, deserunt illo reprehenderit non eaque nihil sunt animi dolor recusandae qui totam modi voluptatem doloremque facere assumenda. Adipisci nam molestiae, vero deserunt repellat reiciendis iste magni nulla pariatur quo odio.
                        </p>
                        <span className="text-blue-500">more......</span>
                    </div>
                </div>
            </div>



            {
                view &&
                <View isView={isView} />
            }



        </div>
    );
};

export default Notes;