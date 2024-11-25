import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../Features/Notes/notesSlice'

export const store = configureStore({
  reducer: {
    note:notesReducer
  },
})