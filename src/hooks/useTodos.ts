import { useState } from 'react';
import { ITodo } from "../models/models" 

export function useTodos () {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (newTodo: string) => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        content: newTodo,
        completed: false
      }
    ])
  }

  const updateHandler = (todoId: string) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }

  const deleteHandler = (todoId: string) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return {todos, addHandler, updateHandler, deleteHandler}
}
