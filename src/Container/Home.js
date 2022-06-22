import axios from "axios";
import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import Button from "@mui/material/Button";

function Home(props) {
  const [Data, SetData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState([]);
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/user`)
      .then((res) => {
        SetData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClickOpen = () => {
    setImg ([]);
    setImgPath ( " ");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpLoad = () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgPath(reader.result);
    });
    reader.readAsDataURL(img);
 
    // setOpen(false);
  };
  console.log(imgPath);
  // console.log(img);
  return (
    <>
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Upload Image
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>IAMGE</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label="Upload Image"
              type="file"
              fullWidth
              variant="standard"
              onChange={(e) => setImg(e.target.files[0]) }
            />
            <img src={imgPath} width={100}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {/* <Button onClick={handleUpLoad}>Upload</Button> */}
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <center>
          <h1 className="font-monospace">HOME</h1>
          <div className="container"></div>

          <table class="table table-hover table-info  table-responsive">
            <thead class="thead-light">
              <tr className="text-center">
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">YEAR</th>
                <th scope="col">COLOR</th>
                <th scope="col">PANTONE_VALUE</th>
                <th scope="col">IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {Data?.data?.map((NewData) => {
                if (NewData.year >= 2002) {
                  return (
                    <tr className="text-center">
                      <td>{NewData.id}</td>
                      <td>{NewData.name}</td>
                      <td>{NewData.year}</td>
                      <td>{NewData.color}</td>
                      <td>{NewData.pantone_value}</td>
                      <td>{NewData.pantone_value}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default Home;
