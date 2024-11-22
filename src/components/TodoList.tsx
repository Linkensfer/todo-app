import { ITodo } from "../models/models"
import { TodoItem } from "./TodoItem"
import List from '@mui/material/List';
import styles from './TodoList.module.scss'

interface TodoListProps {
  todos: ITodo[]
  updateHandler(value: string): void
  deleteHandler(value: string): void
}

export function TodoList ({todos, updateHandler, deleteHandler}: TodoListProps) {
  return (
    <List className={styles.list}>
      {todos.map(unitElement => (
        <TodoItem
          key={unitElement.id}
          unitElement={unitElement}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </List>
  )
}
