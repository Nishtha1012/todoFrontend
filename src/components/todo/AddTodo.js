import { useState } from 'react';

import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';

import useTodo from '../hooks/useTodo';
import style from '../pages/home.module.css'

export default function AddTodo() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit } = useForm()
    const { addOneTodo } = useTodo()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.addNew}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                ADD TODO
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(addOneTodo)}>
                    <DialogContent>
                        <DialogContentText>
                            Add New Task
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="todo"
                            label="TODO"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register('todo')}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="DESCRIPTION"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register('description')}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
