import { useState } from 'react';
import AuthHeader from './AuthHeader';
function SignUp() {
    const [email, setEmail] = useState("")
    const onchangeHandler = (e) => {
      console.log(e.target.value);
      setEmail(e.target.value)
    }
  
    return(
      <>
      <AuthHeader/>
      <h1 className="signUpheading">SIGNUP</h1>
      <div className="createAccount">
        <form action="Create-New-Account" className="newAccount">
          <div>
            <label htmlFor="email" className="credentials">Email ID</label>
            <br />
            <input type="text" onChange={onchangeHandler} name="email" id="email" className = "inputbox"/>
          </div>
          <div>
          <label htmlFor="password1" className="credentials">Password</label>
            <br />
            <input type="password" name="password1" id="password1" className = "inputbox"/>
          </div>
          <div>
          <label htmlFor="password2" className="credentials">Confirm Password</label>
            <br />
            <input type="password"  name="password2" id="password2" className = "inputbox"/>
          </div>
          <button type="submit" className={email != "" ? "createBtn createbtnActive" : "createBtn" }>Create Account</button>
        </form>
        <div className="loginDirect">
        <a href="/" className="logIn">Already a user? Log in now</a>
        </div>
      </div>
      </>
    );
    
  }

  export default SignUp;