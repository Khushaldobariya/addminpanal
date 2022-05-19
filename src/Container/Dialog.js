
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, FormikProvider, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';



export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [expiry, setexpiry] = useState('');
  const [data, setdata] = useState('');

  let medicine = {
    email: yup.string().required(' please enter Name'),
    price: yup.string().required('please enter price'),
    quantity: yup.string().required('please enter quantity'),
    expiry: yup.string().required('please enter expiry'),
  }
   let schema = yup.object().shape(medicine);
  
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      expiry: ''
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {

      resetForm();
    }
  })
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
    let laocaldata = JSON.parse(localStorage.getItem("medicine"))
  }
  useEffect = () => ({

  },
    [])



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubmit = (value) => {
    let localdata = JSON.parse(localStorage.getItem("Medicine"));

    let data = {
      id:Math.floor(Math.random() * 10),
      ...value
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
        <Formik value={formik}>
          <Form onSubmit={formik.handleSubmit}>
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
                onChange={formik.handleBlur}
                defaultValue={formik.values.name}
                helperText={formik.errors.name}
                error={formik.errors.name ? true : false}
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
                onChange={formik.handleBlur}
              
              />

              <TextField
                autoFocus
                margin="dense"
                id="quantity"
                name='quantity'
                label="Medicine quantity"
                type="Number"
                fullWidth
                variant="standard"
                onChange={formik.handleBlur}
              
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

      <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClickSubmit}>Submit</Button>
            </DialogActions>
          </DialogContent>
        </Form>
      </Formik>

      </Dialog>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
