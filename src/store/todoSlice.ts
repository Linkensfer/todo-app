import { CaseReducer, createSlice, SliceCaseReducers, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../models/models" 

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as ITodo[],
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      console.log(state)
      console.log(action)

      state.push({
        id: new Date().toISOString(),
        content: action.payload,
        completed: false
      });
    },
    updateTodo(state, action) {},
    deleteTodo(state, action) {}
  }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer
