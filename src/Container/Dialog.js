import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubmit = (values) => {
    let localdata = JSON.parse(localStorage.getItem("Medicine"))

    if (localdata === null) {
        localStorage.setItem("Medicine", JSON.stringify([values]))
    } else { 
        localdata.push(values)
        localStorage.setItem("Medicine", JSON.stringify(localdata))
    }
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='Medicine name'
            label="Medicine Name"
            type="name"
            fullWidth
            variant="standard"
            
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="price"
            name='price'
            label="Medicine price"
            type="Number"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="quntity"
            name='quntity'
            label="Medicine quntity"
            type="Number"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            name='expiry'
            id="expiry"
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
