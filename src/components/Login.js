import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const loginEmailHandler = (e) => {
    let validEmail = e.target.value;
    // let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regEx = /[a-zA-Z0-9]+\.aprilinnovations+@gmail.com/;
    
    if (regEx.test(validEmail)) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.add("is-invalid");
    }
    setEmail(validEmail);
  };

  const loginPasswordHandler = (e) => {
    // setPassword(e.target.value)
    let validPassword = e.target.value;
    let regEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if (regEx.test(validPassword)) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      // console.log("password is weak");
      e.target.classList.add("is-invalid");
    }
    setPassword(validPassword)
  };

  const loginHandler = () => {
    const payload = users.find(user => user.email === email && user.password === password)

    if(payload){
      dispatch({
        type : 'LOGIN',
        payload
      })
      alert("yupiee, successfully login")
    } else {
      alert("wrong credentials, please check email and password")
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="banner text-center mt-3 mb-3">Login</h1>
        <form action="">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="input-group has-validation mb-3">
                <span className="input-group-text" id="email">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  onChange={loginEmailHandler}
                  value={email}
                />
                <small id="emailvalid" className="form-text invalid-feedback">
                  Your email must be a valid email
                </small>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="input-group has-validation mb-3">
                <span className="input-group-text" id="password">
                  <i className="fas fa-regular fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  onChange={loginPasswordHandler}
                  value={password}
                />
                <small id="emailvalid" className="form-text invalid-feedback">
                  Please Provide Strong Password
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 offset-sm-5 col-md-2 offset-md-5">
              <button type="button" className="btn btn-primary" onClick={loginHandler}>
                Login
              </button>
            </div>
            {/* <div className="col-sm-6 col-md-3">
              <Link className="link" to="/forgot-password">
                Forgot Password?
              </Link>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
