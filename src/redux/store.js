import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/todo'

export default configureStore({
  reducer: {
    // reducers 會放在這裡
    todo: todosReducer
  }
})