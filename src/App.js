import Logo from './ensveeLogo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login() {
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
          <label htmlFor="" className="credentials">Email ID</label>
          <br />
          <input type="text" name="" id="inputArea" />
          <br />
          <label htmlFor="" className="credentials">Password</label>
          <br />
          <input type="password" name="" id="inputArea" />
          <br />
          <button type="submit" className="loginBtn">Log In</button>
        </form>
      </div>
    </div>
    </>
  );
}

function PwdChange() {

  return(
    <div className = "header">
      <div className ="ensvee">
      <img src={Logo} className="logo" alt="Ensvee" />
      </div>  
    </div>

  );
  
}
function SignIn() {

  return(
    <div className = "header">
      <div className ="ensvee">
      <img src={Logo} className="logo" alt="Ensvee" />
      </div>  
    </div>

  );
  
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/forgotpassword" exact={true} component={PwdChange} />
        <Route path="/newsignin" exact={true} component={SignIn} />
      </Routes>

    </Router>
  );
  
}


export default App;
