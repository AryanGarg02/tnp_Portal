import { useState } from 'react';
import app from '../../firebase';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import AuthHeader from './AuthHeader'
import {Navigate} from 'react-router-dom'




function Login(props) {

  

    const [email, setEmail] = useState("")
    const emailChangeHandler = (e) => {
      console.log(e.target.value);
      setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const pwdChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", error);
            })


    }

    if (props.user) {
      return <Navigate to="/" replace></Navigate>
    }
    
  
    return (
      <>
      <AuthHeader/>
      <div className="loginforms">
        <h1>LOGIN</h1>
        <div className="LoginForm">
          <form  onSubmit = {onSubmitHandler}>
            <div className="emailInput">
            <label htmlFor="email" className="credentials">Email ID</label>
            <br />
            <input type="text" onChange={emailChangeHandler} name="" id="email" value={email} className="inputbox"/>
            </div>
            <div className="pwdInput">
            <label htmlFor="pwd" className="credentials">Password</label>
            <br />
            <input type="password" onChange = {pwdChangeHandler} name="" id="pwd" value = {password} className="inputbox"/>
            </div>
            <button type="submit" className={email != "" ? "loginBtn btnActive" : "loginBtn" }>Log In</button>
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


  export default Login;