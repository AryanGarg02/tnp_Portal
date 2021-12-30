import react from "react";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

function ViewDetailsPopup(props) {

    const [job, setJob] = useState({})



    useEffect(async () => {
        const uid = props.jobId
        const docRef = doc(db, "jobs", uid);
        let selectedJob = await getDoc(docRef)
        setJob(selectedJob.data())

    }, [props.jobId])


    return (
        <>
            <div className="detailsPopup">
                <div className="header">
                    <div className="title">
                        <h2 className="title">{job.title}</h2>
                        <p className="type">{job.type}</p>
                        <p className="ctc">{job.ctc}</p>
                        <p className="deadline">{job.deadline?.toDate().toString()}</p>
                    </div>
                    <div className="applied"></div>



                </div>
            </div>
        </>


    );

}

export default ViewDetailsPopup;