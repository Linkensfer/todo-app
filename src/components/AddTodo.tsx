import { useState } from 'react';
import Button from '@mui/material/Button';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InputBase from '@mui/material/InputBase';
import styles from './AddTodo.module.scss'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export function AddTodo () {
  const [inputText, setInputText] = useState<string>('')
  const dispatch = useDispatch()

  const onClick = () => {
    if (inputText.trim().length) {
      dispatch(addTodo(inputText))
    }
    setInputText('')
  }

  return (
    <div className={styles.wrapper}>

      <InputBase
        className={styles.input }
        placeholder="Add todos..."
        inputProps={{ 'aria-label': 'search' }}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />

      <Button
        variant="contained"
        endIcon={<PostAddIcon />}
        onClick={onClick}
      >
        Add Todo
      </Button>
    </div>
  )
}
