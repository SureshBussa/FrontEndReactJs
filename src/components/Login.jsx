import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const emailChange = (e) => {
    emailchange(e.target.value);
  };

  const passwordChange = (e) => {
    passwordchange(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `http://localhost:8090/getresponse/${email}/${password}`
    );

    if (res.data === "wrong mail") {
      alert("Email doesn't exist");
    } else if (res.data === "wrong pass") {
      alert("Wrong Password");
    } else {
      navigate("/employee");
    }

  };

  const registerPage = () => {
    navigate("/register");
  };

  return (
    <div style={{backgroundImage:`url('https://wallpaperaccess.com/full/1642306.jpg')`}}>
        <div className="Auth-form-container" >
            <form onSubmit={handlesubmit}>
                <div className="Auth-form-content" style={{fontWeight:"bolder"}}>
                    <h1 >LogIn</h1>
                    <label className="label">Email </label>
                    <input type="email" required onChange={emailChange}></input>
                    <label className="label" required>Password</label><br></br>
                    <input type="password" required onChange={passwordChange}></input>
                    <button type="submit" className="btn btn-success">Login</button>  
                </div>
                <p>Don't have an account ?</p>
                <button className="btn btn-info" onClick={registerPage}> Create Account</button>
            </form>
        </div>
    </div>
  );
};
export default Login;
