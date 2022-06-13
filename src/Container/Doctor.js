import * as React from 'react';
import   useState  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik , useFormik } from 'formik';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [data,setData] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  let doctor = {
    name: yup.string().required('enter name'),
    email: yup.string().required('please enter email').email('please enter valid email'),
    degree: yup.string().required('please enter degree'),
    fees: yup.number().required('please enter fees'),
  }

  
  let schema = yup.object().shape(doctor);

  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      degree: '',
      fees: ''
    },
    validationSchema: schema,
    onSubmit: (value,{resetForm}) => {
     handleSubmit(value)
     resetForm();
    }
  })
  const handleSubmit = (value) => {
    let data = {
      id: Math.floor(Math.random() *1000),
      ...value 
  
    }
    console.log(data);
   setOpen()
  }

  return (
    <div>
      <center>
        <h1>Doctor List</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
       Add doctor name
      </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Doctor information</DialogTitle>
<Formik value={formik}>
<Form onsubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            name="name"
            margin="dense"
            id="name"
            label="Name "
            type="name"
            fullWidth
            variant="standard"
            onChange={formik.handleSubmit}
            defaultValue={formik.values.name}
            helperText={formik.errors.name}
            error={formik.errors.name ? true : false}
            he
          />
          {  formik.errors.name ? <p> {formik.errors.name }</p> : null }
             <TextField
            autoFocus
            margin="dense"
            name="email"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={formik.handleSubmit}
            defaultValue={formik.values.email}
            helperText={formik.errors.email}
            error={formik.errors.email ? true : false}

          />
           {  formik.errors.email ? <p> {formik.errors. email}</p> : null }
             <TextField
            autoFocus
            margin="dense"
            name="degree"
            id="degree"
            label="Degree"
            type="Degree"
            fullWidth
            variant="standard"
            onChange={formik.handleSubmit}
            defaultValue={formik.values.degree}
            helperText={formik.errors.degree}
            error={formik.errors.degree ? true : false}
          />

{  formik.errors.degree ? <p> {formik.errors. degree}</p> : null }
             <TextField
            autoFocus
            margin="dense"
            name="fees"
            id="fees"
            label="Fees"
            type="number"
            fullWidth
            variant="standard"
            onChange={formik.handleSubmit}
            defaultValue={formik.values.fees}
            helperText={formik.errors.fees}
            error={formik.errors.fees ? true : false}
          />
          
{  formik.errors.fees ? <p> {formik.errors. fees}</p> : null }
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type={'submit'}>Submit</Button>
        </DialogActions>
        </DialogContent>
        </Form>
</Formik>
      </Dialog>
    </div>
  );
}
