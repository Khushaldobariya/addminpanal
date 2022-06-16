
import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

function Contact(props) {


  let schema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required("please enter email") .email("enter valid email"),
      phone: yup.string().required("please enter phone"),
      password: yup.string().required("please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values) => {};
  console.log(formik.errors.name);
  return (
    <section >
      
      <div className="container">
      <center>
      <h1 className="tex-center">Login</h1>
          <div className="col-7">
            <Formik value={formik}>
              <Form onSubmit={formik.handleSubmit} className="p-3 border rounded" >
                
                  <div className="form-group mt-3">
                     <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p>{formik.errors.name}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group mt-3">
                     <label >Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <p>{formik.errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                
                <div className="form-group mt-3">
                   <label >phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone "
                    placeholder="phone number"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && formik.touched.phone ? (
                    <p>{formik.errors.phone}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group mt-3">
                <label >password</label>
                  <input
                    id="password" 
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <p>{formik.errors.password}</p>
                  ) : (
                    ""
                  )}
                </div>
             
              
                  <button type="submit" className="text-center w-100 my-2 btn btn-dark">Login</button>
              
              </Form>
            </Formik>
          </div>
          </center>
        </div>

    </section>
  );
}

export default Contact;

