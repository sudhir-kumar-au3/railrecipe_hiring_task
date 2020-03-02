import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { stateMapper } from "../redux/store";
import { connect } from "react-redux";
const formValid = (formErrors, formData) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(formData).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
function Login(props) {
    const userData = {
        email: null,
        password: null
      };
      const errors = {
        email: "",
        password: ""
      };
    
      const [formData, setFormData] = useState(userData);
      const [formErrors, setFormErrors] = useState(errors);
       
      const handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(formErrors, formData)) {
          props.dispatch({
            type: "USER_LOGIN",
            data: {
              email: formData.email,
              password: formData.password
            }
          });
          props.history.push('/app/home')
          console.log(`
                --SUBMITTING--
                Email: ${formData.email}
                Password: ${formData.password}
              `);
        } else {
          alert("FORM INVALID");
        }
      };
      const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...errors };
    
        switch (name) {
          case "email":
            formErrors.email = (!formData.email || formData.email !== props.userData.email)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password = (!formData.password || formData.password !== props.userData.password)
              ? ""
              : "Enter a valid password";
            break;
          default:
            break;
        }
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors });
      };
    return (
      <div className="container-fluid p-3 signup-page">
        <div className="row my-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <div className="row signup-form-wrapper p-md-2 m-md-5 bg-white">
            <div className="col-md-6 p-5">
              <h1 className="font-weight-bolder">Login</h1>
              <br></br>
              <br></br><br></br>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="icon ion-md-mail"></i>
                  </label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="icon ion-md-lock"></i>
                  </label>
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    type="password" 
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  ></input>
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="form-group">
                    <br></br><br></br>
                  <button className="btn rounded mt-1" type="submit">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 p-md-5">
              <div className="container mt-md-5">
                <img
                  className="embed-responsive"
                  src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                  alt="signup-img"
                ></img>
              </div>
              <br></br>
              <div className="text-center m-3">
                <Link className="text-dark" to="/signup">
                  <u>New User</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
}

export default connect(stateMapper)(Login);
