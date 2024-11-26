import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : []
}

 
export const todosSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        deletePrev:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                return action.payload !== todo.date
            })
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        addToTodo: (state, action)=>{
            state.todos.push(action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
            toast.success("Task Added")
        },

        deleteTask: (state, action) =>{
            state.todos = state.todos.filter((todo)=>{
                return action.payload !== todo.id
            })
            localStorage.setItem("todos", JSON.stringify(state.todos));
            toast.success("Task Deleted")
        },

        editPending: (state, action)=>{
            const index = state.todos.findIndex((todo)=> todo.id === action.payload)
            state.todos[index].pending = !state.todos[index].pending;
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
})

export const {deletePrev, addToTodo, deleteTask, editPending} = todosSlice.actions
export default todosSlice.reducer