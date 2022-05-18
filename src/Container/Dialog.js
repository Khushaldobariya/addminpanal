
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';



export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setprice] = useState('');
  const [quntity, setquntity] = useState('');
  const [expiry, setexpiry] = useState('');

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {

      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {

      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {

      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {

      headerName: 'Full name',
      sortable: false,
      width: 160,
     
    },
  ];

const laoddata = () => {
  let laocaldata = JSON.parse(loacalStorge.getItem("medicine"))
}

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

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
    console.log(data);
    if (localdata === null) {
      localStorage.setItem("Medicine", JSON.stringify([data]))
    } else {
      localdata.push(data)
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
            onChange={(e)=> setName (e.target.value)}

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
            onChange={(e)=> setprice (e.target.value)}
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
            onChange={(e)=> setquntity (e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            name='expiry'
            id="expiry"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e)=> setexpiry (e.target.value)}

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
