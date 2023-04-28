import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const emailHandler = (e) => {
    // setEmail(e.target.value)
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

  const passwordHandler = (e) => {
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
    setPassword(validPassword);
  };

  const signupHandler = () => {
    
    dispatch({
      type: "REGISTER",
      payload: {
        email,
        password,
        name,
      },
    });
    navigate("/login");
  };

  // const users = useSelector((state) => state.users);

  return (
    <>
      <div className="container">
        <h1 className="banner text-center mb-3 mt-3">Signup</h1>
        <form action="">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="input-group has-validation mb-3">
                <span className="input-group-text" id="email">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={emailHandler}
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
                  value={password}
                  onChange={passwordHandler}
                />
                <small id="emailvalid" className="form-text invalid-feedback">
                  Please Provide Strong Password
                </small>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="name">
                  <i className="fa-regular fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={signupHandler}
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="container">
        {users.map((user) => {
          return (
            <div>
              <h1>{user.email}</h1>
              <h1>{user.password}</h1>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Signup;
