import * as React from 'react';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [price, setprice] = React.useState('');
  const [quntity, setquntity] = React.useState('');
  const [expiry, setexpiry] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubmit = () => {
    let localdata = JSON.parse(localStorage.getItem("Medicine"));

    let data = {
      name,
      price,
      quntity,
      expiry,
    }
  }
  console.log(data);
  if (localdata === null) {
    localStorage.setItem("Medicine", JSON.stringify([loacaldata]))
  } else {
    localdata.push(data)
    localStorage.setItem("Medicine", JSON.stringify(data))
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
