import backgroundImg from '../../assets/6671 1.svg';
import logo from '../../assets/logo.svg';
import styles from './LiveJobs.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../../firebase';
import { getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import {db} from '../../firebase'
import {useEffect, useState } from 'react';
import ViewJobDetails from './ViewDetails'

function LiveJobs (props){
    const user = props.user;
    const db = getFirestore(app);
    const clginfo = props.clginfo;
    const collegeId = clginfo?.collegeid
    const [jobs, setJobs] = useState([])
    const [selectedJobId, setSelectedJobId] = useState()

    useEffect(async() => {
        if (!collegeId) return;
        const q = query(collection(db, "jobs"), where("recipient." + collegeId, "==", "live"));
        const queryJobs = await getDocs(q);
        let jobsArray = []
        queryJobs.docs.map((jobDoc) => {
            console.log(jobDoc.id, " => ", jobDoc.data());
            let jobData = {...jobDoc.data()}
            jobsArray.push(jobData)
        });
        
        setJobs(jobsArray)
        jobsArray = []
        let promises = queryJobs.docs.map(async(jobDoc) => {
            const countDocRef =  doc(jobDoc.ref, "count", jobDoc.id)
            const countDocSnap = await getDoc(countDocRef)
            let countData = countDocSnap.data()
            let jobData = {...jobDoc.data(),...countData}
            jobsArray.push(jobData)
        });
        await Promise.all(promises)
        setJobs(jobsArray)

    }, [collegeId]) 

    let jobDetailsPopup = null
    
    async function viewCompanyDetails (e,uid) {
        const docRef = doc(db, "jobs", uid)
        const selectedDocsnap = await getDoc(docRef)
        let jobViewed = selectedDocsnap.data()
        let selectedJobData = {...jobViewed};
        const jobId = selectedJobData.uid
        console.log({jobId})

        setSelectedJobId(jobId)
        jobDetailsPopup = <ViewJobDetails />

    }
    
    



    

    return(

        <>
            <ViewJobDetails jobId = {"9998367044443870"}/>
            {jobs.map(job => {
                return (
                    <div className={styles.ActiveJobs} key={job.uid}>
                        <div className={styles.Job}>
                            <div className={styles.JobDescription}>
                                <div className={styles.CompanyDetails}>
                                    <div>
                                        <img src={logo} alt="Ensvee" />
                                    </div>
                                    <div>
                                        <p className={styles.CompanyName}>{job.company}</p>
                                        <p className={styles.Profile}>{job.title}</p>
                                    </div>
                                </div>
                                <div className={styles.ApplicantsDetails}>
                                    <button onClick={(e) => viewCompanyDetails(e,job.uid)} jobId = {selectedJobId} className={styles.ViewDetails}>View Details</button>
                                    <button className={styles.DownloadXls}>Download.XLS</button>
                                </div>
                            </div>
                            <div className={styles.Applicants}>
                                <p className={styles.AppliedTxt}>Applicants Applied</p>
                                <p className={styles.ApplicantsNumber}>{job.count}</p>

                            </div>
                        </div>
                    </div>
                );
            })}
    </>
    );
}

export default LiveJobs;