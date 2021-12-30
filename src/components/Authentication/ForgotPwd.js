import react,  { useState } from "react";
import AuthHeader from "./AuthHeader";


function PwdChange() {
    const [email, setEmail] = useState("")
    const onchangeHandler = (e) => {
      console.log(e.target.value);
      setEmail(e.target.value)
    }
  
    return(
      <>
      <AuthHeader/>
  
      <div className="passwordReset">
        <h1>Forgot Password</h1>
        <p>A password reset link will be sent to your email ID</p>
      </div>
      
      <div className="resetLink">
        <form action="password-reset">
          <div>
          <label htmlFor="email" className="credentials">Email ID</label>
          <br />
          <input type="text" onChange={onchangeHandler} name="" id="email" className = "inputbox"/>
          </div>
          <button type="submit" className={email != "" ? "pwdBtn pwdbtnActive" : "pwdBtn" }>Send Password Reset Link</button>
        </form>
      </div>
  
      </>
    );
    
  }
  export default PwdChange;