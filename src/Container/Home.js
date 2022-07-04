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
  const [error, setError] = useState(" ");

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
    setImg([]);
    setImgPath(" ");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpLoad = (e) => {
    if (img?.length === 0) {
      let error = {};
      if (img?.length === 0) error.img = "Image is required !";

      return setError({ ...error });
    } else {
      setOpen(false);
    }

    //   setImg(e.target.files[0]);
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     console.log(reader.result);
    //     setImgPath(reader.result);
    //   });

    //   reader.readAsDataURL(e.target.files[0]);
  };

  // const handleUpLoad = (e) => {
  //   setImg(e.target.files[0]);
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     console.log(reader.result);
  //     setImgPath(reader.result);
  //   });

  //   reader.readAsDataURL(e.target.files[0]);

  //   // setOpen(false);
  // };
  // console.log(img);

  const handleLoad = (event) => {
    setImg(event.target.files[0]);
    setImgPath(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Upload Image
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>IAMGE</DialogTitle>
          <DialogContent>
            <input
              autoFocus
              margin="dense"
              id="img"
              label="Upload Image"
              type="file"
              fullWidth
              variant="standard"
              onChange={(e) => handleLoad(e)}
            />

            {imgPath && <img src={imgPath} width={100} />}

            {error.img && error.img}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={(e) => handleUpLoad(e)}>Upload</Button>
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
                      <td>
                        <img
                          styel={{
                            backgroundSize: "cover",
                            width: "75px",
                            height:"75px"
                          }}
                          className="img"
                          src={imgPath}
                        />
                      </td>
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
