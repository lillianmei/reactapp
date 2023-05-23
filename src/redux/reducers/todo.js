import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

const todo = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    setAdd(state, action) {
      console.log(action)
      //解構
      const { id, content, isDone } = action.payload
      return {
        data: [
          ...state.data,
          {
            id,
            content,
            isDone
          },
        ]
      }
    },
    deleteList(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    changeListStatus(state, action) {
      console.log('change', action)
      state.data.filter((item) => {
        if (action.payload === item.id) { item.isDone = !item.isDone }
        return item
      });
    }
  }
})

export const { setAdd, deleteList, changeListStatus } = todo.actions

export default todo.reducer