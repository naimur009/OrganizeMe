import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToNote, editNote } from '../Features/Notes/notesSlice'
import { useSelector } from "react-redux";



const NoteForm = (props) => {



    const [tittle, setTittle] = useState("");
    const [content, setContent] = useState("");
    const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const notes = useSelector((state) => state.note.notes)


    useEffect(() => {
        if(props.prevId){
            const data = notes.find((note) =>
                (note.id === props.prevId)
            )
            setTittle(data.tittle)
            setContent(data.content)
        }
        

    }, [])

    const dispatch = useDispatch();

    const handleSave = (event) => {
        event.preventDefault();
        const note = {
            id: props.prevId || nanoid(),
            tittle: tittle,
            date: date,
            content: content,
            trashed: false
        }
        if (props.prevId) {
            dispatch(editNote(note));

        }
        else {
            dispatch(addToNote(note));
        }
        setTittle("");
        setContent("");
        props.toggle();
    }


    const handleInputChange = (event) => {
        const textarea = event.target;
        textarea.style.height = "auto"; // Reset the height to auto
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    };


    return (
        <div className='flex justify-center items-center h-screen w-screen absolute top-0 bg-black bg-opacity-70'>
            <div className="bg-[#202124] w-[95%] max-w-[700px] p-5 rounded-lg absolute z-10 pb-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Create a new note</h1>
                    <button onClick={()=>{
                        setTittle("");
                        setContent("");
                        props.setPrevId(null);
                        props.toggle();
                    }}>
                        <img className="h-10" src="/src/assets/remove.png" alt="" />
                    </button>
                </div>
                <form className="w-full mx-auto" onSubmit={handleSave}>
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
                        autoComplete='off'
                        value={tittle}
                        onChange={(e) => { setTittle(e.target.value) }}
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
                            value={content}
                            required
                            autoComplete='off'
                            onChange={(e) => { setContent(e.target.value) }}
                            onInput={handleInputChange}
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 w-full py-2 mt-3 rounded-lg"
                    >
                        {props.prevId ? "Update" : "Save"}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default NoteForm;