import Logo from '../../assets/ensveeLogo.svg';
import backgroundImg from '../../assets/6671 1.svg';
import styles from './Home.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveJobs from './LiveJobs';
import { useState } from 'react'
import PendingJobs from './PendingJobs';
import NewCompanies from './NewCompanies';



function Home(props) {
    

    const [activeSection, setActiveSection] = useState("Live");

    function liveClickHandler() {
        setActiveSection("Live")
        
    }
    function pendingClickHandler() {
        setActiveSection("Pending")
        
    }
    function newCompanyClickHandler() {
        setActiveSection("New")
        
    }

    console.log("rendering");

    let section ;

    if(activeSection == "Live"){
        section = <LiveJobs user = {props.user} clginfo={props.clginfo}/>
 
    }
    if(activeSection == "Pending"){
        section = <PendingJobs collegeId = {props.clginfo.collegeid}/>
 
    }
    if(activeSection == "New"){
        section = <NewCompanies collegeId = {props.clginfo.collegeid}/>
 
    }

    return(
        <div className={styles.Live}>
                <div className={styles.Heading}>
                    <h1 className={styles.Home}>Home</h1>
                    <button className={styles.NewJob}><a href="">Add New Job</a></button>
                </div>
                <div className="section1">
                    <div className={styles.NavBar}>
                        <p onClick={liveClickHandler} className={[styles.Sections,activeSection == "Live" && styles.Active] .join(" ")}>0 Live Jobs</p>
                        <p onClick={pendingClickHandler} className={[styles.Sections,activeSection == "Pending" && styles.Active] .join(" ")}>0 Pending For Approval</p>
                        <p onClick={newCompanyClickHandler} className={[styles.Sections,activeSection == "New" && styles.Active] .join(" ")}>0 New Company Invites</p>
                    </div>
                    {/* <img src={backgroundImg} alt="live jobs" className={styles.BgImg} /> */}
                    {/* <h1 className={styles.NoJobs}>There are no jobs to show</h1> */}
                    {section}
                    
                    
                </div>
        </div>
        

    );
    
}

export default Home;

