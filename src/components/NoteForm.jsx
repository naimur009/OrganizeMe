import React, { useState } from 'react';

const NoteForm = (props) => {
    const handleInputChange = (event) => {
        const textarea = event.target;
        textarea.style.height = "auto"; // Reset the height to auto
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
        // setMessage(event.target.value); // Update the state with the input value
    };

    return (
        <div className='flex justify-center items-center h-screen w-screen absolute top-0 bg-black bg-opacity-70'> 
            <div className="bg-[#202124] w-[95%] max-w-[700px] p-5 rounded-lg absolute z-10 md:left-1/3 pb-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Create a new note</h1>
                    <button onClick={props.toggle}>
                        <img className="h-10" src="/src/assets/remove.png" alt="" />
                    </button>
                </div>
                <form className="w-full mx-auto">
                    <label
                        htmlFor="tittle"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                        Tittle
                    </label>
                    <input
                        type="text"
                        id="tittle"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div>
                        <label
                            htmlFor="note"
                            className="block mb-2 text-sm mt-2 font-medium text-gray-900 dark:text-white"
                        >
                            Note
                        </label>
                        <textarea
                            id="note"
                            rows="10"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-hidden"
                            placeholder="Write your thoughts here..."
                            onInput={handleInputChange}
                        ></textarea>
                    </div>
                    <button className="bg-blue-500 w-full py-2 mt-3 rounded-lg">
                        Save
                    </button>
                </form>

            </div>
        </div>
    );
};

export default NoteForm;