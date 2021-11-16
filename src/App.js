import Logo from './ensveeLogo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("")
  const onchangeHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  return (
    <>
    <div className = "header">
      <div className ="ensvee">
      <img src={Logo} className="logo" alt="Ensvee" />
      </div>  
    </div>
    <div className="loginforms">
      <h1>LOGIN</h1>
      <div className="LoginForm">
        <form action="loginin">
          <div className="emailInput">
          <label htmlFor="email" className="credentials">Email ID</label>
          <br />
          <input type="text" onChange={onchangeHandler} name="" id="email" value={email} className="inputbox"/>
          </div>
          <div className="pwdInput">
          <label htmlFor="pwd" className="credentials">Password</label>
          <br />
          <input type="password" name="" id="pwd" className="inputbox"/>
          </div>
          <button type="submit" className={email != "" ? "loginbtn btnActive" : "loginBtn" }>Log In</button>
        </form>
      </div>
    </div>
    <div className="redirectLinks">
      <a href="/forgotpassword" className="forgot">Forgot Password?</a>
      <br />
      <a href="/newsignin" className="newUser">New User? Sign in now</a>
    </div>
    </>
  );
}

function PwdChange() {
  const [email, setEmail] = useState("")
  const onchangeHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  return(
    <>
    <div className = "header">
      <div className ="ensvee">
      <img src={Logo} className="logo" alt="Ensvee" />
      </div>  
    </div>

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
function SignIn() {
  const [email, setEmail] = useState("")
  const onchangeHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  return(
    <>
    <div className = "header">
      <div className ="ensvee">
      <img src={Logo} className="logo" alt="Ensvee" />
      </div>  
    </div>
    <h1 className="signInheading">SIGNIN</h1>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/forgotpassword" exact={true} element={<PwdChange />} />
        <Route path="/newsignin" exact={true} element={<SignIn />} />
      </Routes>

    </Router>
  );
  
}


export default App;
