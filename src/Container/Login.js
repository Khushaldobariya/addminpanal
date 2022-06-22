import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import swal from "sweetalert";


function Contact(props) {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || password === "" || phone === "") {
      let error = {};


      if (name === "") error.name = "please enter name";

      if (email === "") error.email = "please enter email";

      if (phone === "") error.phone = "please enter phone";

      if (password === "") error.password = "please enter password";
      
      return setError({ ...error });
    } else  {
      swal({
        title: "Good job!",
        text: "Your From Submit Successfuly..!",
        icon: "success",
        button: "Submit",
      });
    }
    
    const response = {
      name : name,
      email : email,
      phone : phone,
      password : password,
    }

    // axios.post("url", response).then((res) => res.)

    console.log("response", response);

  };
  return (
    <section>
    
      <div className="container ">
        <center>
          <h1 className="tex-center font-monospace">LOGIN</h1>
          <div className="col-4">
            <form className="p-3 border rounded  font-monospace ">
              <div className="form-group mt-3">
                <label className="fs-5">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control p-2"
                  id="name"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setName(e.target.value);

                    if (!e.target.value) {
                      return setError({
                        ...error,
                        name: "please enter your name",
                      });
                    } else {
                      return setError({
                        ...error,
                        name: "",
                      });
                    }
                  }}
                />

                {error?.name && <p>{error?.name}</p>}
              </div>
              <div className="form-group mt-3">
                <label className="fs-5">Email address</label>
                <input
                  type="email"
                  className="form-control p-2"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!e.target.value) {
                      return setError({
                        ...error,
                        email: "please enter your email",
                      });
                    } else {
                      return setError({
                        ...error,
                        email: "",
                      });
                    }
                  }}
                />
                {error?.email && <p>{error?.email}</p>}
              </div>

              <div className="form-group mt-3">
                <label className="fs-5">phone Number</label>
                <input
                  type="text"
                  className="form-control p-2"
                  name="phone"
                  id="phone "
                  placeholder="phone number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (!e.target.value) {
                      return setError({
                        ...error,
                        phone: "please enter your phone no.",
                      });
                    } else {
                      return setError({
                        ...error,
                        phone: "",
                      });
                    }
                  }}
                />
                {error?.phone && <p>{error?.phone}</p>}
              </div>
              

              <div className="form-group mt-3">
                <label className="fs-5">password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control p-2"
                  name="password"
                  placeholder="password"
                  
                  onChange={(e) => {
                    setPassword(e.target.value);

                    if (!e.target.value) {
                      return setError({
                        ...error,
                        password: "password is required!",
                      });
                    } else {
                      return setError({
                        ...error,
                        password: "",
                      });
                    }
                  }}
                />
                {error?.password && <p>{error?.password}</p>}
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="text-center w-100 my-2 btn btn-dark"
              >
                Login
              </button>
            </form>
          </div>
        </center>
      </div>
    </section>
  );
}

export default Contact;
