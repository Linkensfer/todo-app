import { ITodo } from "../models/models";
import { RemoveTodo } from "./RemoveTodo";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import styles from './TodoItem.module.scss'
import { useDispatch } from 'react-redux';
import { updateTodo } from "../store/todoSlice";

interface TodoItemProps {
  unitElement: ITodo
}

export function TodoItem ({ unitElement }: TodoItemProps) {
  const dispatch = useDispatch()
  return (
    <ListItem className={styles.elem}>
      <ListItemButton onClick={() => dispatch(updateTodo(unitElement.id))} dense>
        <ListItemIcon>
          <Checkbox
            checked={unitElement.completed}
          />
        </ListItemIcon>

        <ListItemText primary={unitElement.content} />
      
      </ListItemButton>

      <RemoveTodo
        unitElement={unitElement}
      />

    </ListItem>
  )
}
