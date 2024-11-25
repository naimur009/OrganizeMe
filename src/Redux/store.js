import { configureStore } from '@reduxjs/toolkit'
import reducer from '../Features/combinedSlice/combined'

export const store = configureStore({
    reducer
}
)