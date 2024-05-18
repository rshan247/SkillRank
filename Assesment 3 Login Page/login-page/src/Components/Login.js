import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Login(){

    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [responseText, setResponseText] = useState();

    function handleChange(event){
      console.log(event.target.className);
      if(event.target.className == "email-input") setEmail(event.target.value);
      if(event.target.className == "password-input") setPassword(event.target.value);
    }

    async function handleClick(event){
      event.preventDefault();
      setResponseText("");
      try{
        console.log(email);
        const response = await axios.post("http://127.0.0.1:5000/login",{
          email: email,
          password: password,
        });
        console.log(response);
        if (response.status == 200)
          navigate("/");
      }
      catch (error) {
        console.error('Error:', error);
        if (error.response && error.response.status === 401) {
          setResponseText("Unauthorized access. Please check your credentials.");
        } else {
          setResponseText("An error occurred. Please try again later.");
        }
  
      }
    }

    return(
    <div className="login-container">
      <form>
        <h1 className='login-title'>Login</h1><br/>
        <label className='email'>Email Address</label><br/>
        <input className='email-input' type='text' placeholder="rshan@gmail.com" required
               onChange={handleChange}
        /><br/>
        <label className='password'>Password</label><br/>
        <input className='password-input' type='password' placeholder="Password" required
               onChange={handleChange}
        /><br/>
        <div className='login-btn-div'><input value='Login' type='submit'  className='login-btn'
               onClick={handleClick}
        /></div>
        {responseText != "" && <p id="respose_text">{responseText}</p>}
      </form>
    </div>
    )
}

export default Login;