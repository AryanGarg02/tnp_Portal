import Logo from './ensveeLogo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Layout from './components/Layout/layout';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import PwdChange from './components/Authentication/ForgotPwd';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from './firebase'
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute';


function App() {
  const [user, setUser] = useState();
  const [clginfo, setClginfo] = useState();
  console.log("rendering", user, clginfo);
  

  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) 
      setUser(currentUser);
    else 
      setUser(null);
  });

  useEffect(async () => {

    if(!user) return;
    //fetching clginfo
    const docRef = doc(db, "clginfo", user.uid);
    const docSnap = await getDoc(docRef);

    let collegeId;

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      collegeId = docSnap.data().id;

      setClginfo(docSnap.data())
    } else {
      console.log("No such document!");
    }

    //fetching jobs

  }, [user])

  // user : undefined => State not set, object : Authenticated,  null: unauthenticated

  if(user === undefined)
  return <img className='loading' src={Logo} alt="Loading" />

  return (
    <Router>
      <Routes>

        <Route path="/login" exact={true} element={<Login user={user} />} />
        <Route path="/forgotpassword" exact={true} element={<PwdChange  user={user}  />} />
        <Route path="/newSignUp" exact={true} element={<SignUp  user={user} />} />
        {/* <ProtectedRoute path="/home" user={user} element={<Layout><Home user = {user} clginfo = {clginfo}/></Layout>} /> */}
        <Route path="/" element={<ProtectedRoute user={user}><Layout><Home user = {user} clginfo = {clginfo}/></Layout></ProtectedRoute>} />

      </Routes>
    </Router>

  );
  
}


export default App;
