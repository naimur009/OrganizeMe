import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    notes: localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes"))
        : []
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addToNote: (state, action)=>{
            state.notes.push(action.payload);
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note Saved");

        },

        editNote: (state, action) =>{
            const index = state.notes.findIndex((note)=>
                (note.id == action.payload.id)
            )
            state.notes[index] = action.payload;
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note Updated")

        },

        addToImportant:(state, action)=>{
            console.log("I am ok")
        },

        moveToTrash: (state, action) =>{
            const index = state.notes.findIndex((note)=>
                (note.id === action.payload)
            )

            state.notes[index].trashed = true;
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note Move to Trash");

        },

        restoreNote:(state, action)=>{
            const index = state.notes.findIndex((note)=>
                (note.id === action.payload)
            )
            state.notes[index].trashed = false;
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note Restored");
        },

        deleteNote:(state, action)=>{
            state.notes = state.notes.filter((note)=>{
                return action.payload !== note.id
            })
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note Deleted");
        }

    },
})

// Action creators are generated for each case reducer function
export const { addToNote, editNote, moveToTrash, restoreNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer