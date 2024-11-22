import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface RemoveTodoProps {
  deleteHandler(): void
}

export function RemoveTodo({deleteHandler}: RemoveTodoProps) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAndClose = () => {
    deleteHandler()
    setOpen(false);
  }

  return (
  <>
    <DeleteIcon onClick={handleClickOpen}/> 
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Удаление элемента"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы действительно хотите удалить задачу?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleDeleteAndClose} autoFocus>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}
