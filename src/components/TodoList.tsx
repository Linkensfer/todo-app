import { TodoItem } from "./TodoItem"
import List from '@mui/material/List';
import styles from './TodoList.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from "../store";

export function TodoList () {
  const todos = useSelector((state: RootState) => state.todos.todos)
  console.log(todos)

  return (
    <List className={styles.list}>
      {todos.map(unitElement => (
        <TodoItem
          key={unitElement.id}
          unitElement={unitElement}
        />
      ))}
    </List>
  )
}
