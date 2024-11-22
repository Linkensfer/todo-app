import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../models/models" 

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as ITodo[]
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      // console.log(state)
      // console.log(action)

      state.todos.push({
        id: new Date().toISOString(),
        content: action.payload,
        completed: false
      });
    },
    updateTodo(state, action: PayloadAction<string>) {
      const toggledTodo: ITodo | undefined = state.todos.find(todo => todo.id === action.payload)
      if (toggledTodo) {toggledTodo.completed = !toggledTodo.completed}
    },
    deleteTodo(state, action: PayloadAction<string>) {
      // console.log(state)
      // console.log(action)
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer
