import react, { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../firebase'
import { useEffect } from "react";
import styles from './PendingJobs.module.css';
import logo from '../../assets/logo.svg';


const PendingJobs = (props) =>  {
    const [pendingJobs,setPendingJobs] = useState([])

    useEffect(async() => {
        const pendingJobs = query(collection(db, "pending_jobs"), where("recipient." + props.collegeId, "==", true));

        const queryPendingJobs = await getDocs(pendingJobs);
        let pendingJobsArray = []
        queryPendingJobs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let data = doc.data()
            data.uid = doc.id
            pendingJobsArray.push(data)
    });
    setPendingJobs(pendingJobsArray)

    console.log("Pending");
    }, [props.collegeId])

    

    return(
        <>
            {pendingJobs.map(pendingJob => {
                return(
                    
                        <div className={styles.Job} key={pendingJob.uid}>
                            <div className={styles.JobDescription}>
                                <div className={styles.CompanyDetails}>
                                    <div>
                                        <img src={logo} alt="Ensvee" />
                                    </div>
                                    <div>
                                        <p className={styles.CompanyName}>{pendingJob.company}</p>
                                        <p className={styles.Profile}>{pendingJob.title}</p>
                                    </div>
                                </div>
                                <div className={styles.ApplicantsDetails}>
                                    <button className={styles.ViewDetails}>View Details</button>
                                </div>
                            </div>
                        </div>
                );
            })} 
        </>
    );
    
}

export default PendingJobs;