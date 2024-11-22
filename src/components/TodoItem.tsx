import { ITodo } from "../models/models";
import { RemoveTodo } from "./RemoveTodo";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import styles from './TodoItem.module.scss'

interface TodoItemProps {
  unitElement: ITodo
  updateHandler(value: string): void
  deleteHandler(value: string): void
}

export function TodoItem ({unitElement, updateHandler, deleteHandler}: TodoItemProps) {
  return (
    <ListItem className={styles.elem}>
      <ListItemButton onClick={() => updateHandler(unitElement.id)} dense>
        <ListItemIcon>
          <Checkbox
            defaultChecked
            checked={unitElement.completed}
          />
        </ListItemIcon>

        <ListItemText primary={unitElement.content} />
      
      </ListItemButton>

      <RemoveTodo
          deleteHandler={() => deleteHandler(unitElement.id)}
      />

    </ListItem>
  )
}
