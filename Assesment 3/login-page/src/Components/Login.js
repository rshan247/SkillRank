import React from "react";

function Login(){
    return(
    <div className="login-container">
      <form>
        <h1 className='login-title'>Login</h1><br/>
        <label className='email'>Email Address</label><br/>
        <input className='email-input' type='text' placeholder="rshan@gmail.com" required/><br/>
        <label className='password'>Password</label><br/>
        <input className='password-input' type='password' placeholder="Password" required/><br/>
        <div className='login-btn-div'><input value='Login' type='submit'  className='login-btn'/></div>
      </form>
    </div>
    )
}

export default Login;