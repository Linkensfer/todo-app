import { useState } from 'react';
import Button from '@mui/material/Button';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InputBase from '@mui/material/InputBase';
import styles from './AddTodo.module.scss'

interface AddTodoProps {
  addHandler(value: string): void
}

export function AddTodo ({addHandler}: AddTodoProps) {
  const [inputText, setInputText] = useState<string>('')

  const onClick = () => {
    if (inputText.trim().length) {
      addHandler(inputText)
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
