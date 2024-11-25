import todosReducers from "../toDos/todosSlice";
import notesReducer from '../Notes/notesSlice';
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    notes: notesReducer,
    todos: todosReducers
})