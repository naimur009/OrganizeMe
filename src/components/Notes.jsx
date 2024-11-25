import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import View from "./View";
import { useSelector } from "react-redux";


const Notes = () => {

    useEffect(() => {
        document.title = "OrganizeMe - Notes"
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const [prevId, setPrevId] = useState("");

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const [view, setView] = useState(false);

    const [urlId, setUrlId] = useState();

    const isView = (e) => {
        setView(!view);
    }

    const [searchQuery, setSearchQuery] = useState('');
    const note = useSelector((state) => state.notes.notes)

    const data = note.filter((note) => {
        return note.tittle.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) && note.trashed === false
    })

    return (
        <div className="overflow-x-hidden w-[screen]">
            <div>
                <form className="flex items-center w-[95%] max-w-sm mx-auto mt-5"
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
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
                            autoComplete="off"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                        />
                    </div>

                </form>

                <button onClick={toggleOpen}>
                    <svg className="h-12 w-12 fixed bottom-6 right-4 md:bottom-10 md:right-10 bg-blue-500 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fcfcfc" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                </button>


            </div>

            {
                isOpen &&
                <NoteForm toggle={toggleOpen} prevId={prevId} setPrevId={setPrevId} />
            }


            {/* notes section */}

            <div className="w-[90%] m-auto columns-2 sm:columns-3 lg:columns-4 xl:columns-5">


                {
                    data?.length ? data.map((note) => {
                        return (
                            <div
                                className="w-[100%] max-w-[320px] mb-4 break-inside-avoid"
                                key={note.id}>
                                <div
                                    className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:cursor-pointer "
                                    onClick={() => {
                                        setUrlId(note?.id);
                                        isView()
                                    }}>
                                    <div className="flex justify-between">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse flex-col">

                                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {note.tittle}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-normal py-4 text-gray-900 dark:text-white line-clamp-6	">
                                        {note.content}
                                    </p>
                                    <span className="text-blue-500">more......</span>
                                </div>
                            </div>
                        )
                    })
                        : <div className="text-xl"></div>

                }
            </div>

            {
                !data?.length && <div className="w-full flex justify-center text-xl mt-5">No notes found</div>
            }



            {
                view && <View isView={isView} noteId={urlId} setPrevId={setPrevId} toggleOpen={toggleOpen} />
            }



        </div>
    );
};

export default Notes;