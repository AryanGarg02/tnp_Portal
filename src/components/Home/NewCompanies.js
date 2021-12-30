import react, { useState } from "react";
import { getFirestore, doc, getDoc , updateDoc} from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../firebase'
import { useEffect } from "react";
import styles from './NewCompanies.module.css';
import logo from '../../assets/logo.svg';


const NewCompanies = (props) =>  {
    const [newCompanies, setNewCompanies] = useState([])
    

    useEffect(async() => {
        const newCompanies = query(collection(db, "jobs"), where("recipient." + props.collegeId, "==", "pending"));
        const queryNewJobs = await getDocs(newCompanies);
        let newCompaniesArray = []
        queryNewJobs.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newCompaniesArray.push(doc.data());
    });
    setNewCompanies(newCompaniesArray)

    }, [props.collegeId])

    function removeCompany(uid) {
        let newCompaniesArray = [...newCompanies]
        let index = newCompaniesArray.findIndex((company) => {
            return company.uid == uid;
        })
        newCompaniesArray.splice(index, 1)
        setNewCompanies(newCompaniesArray)
        
    }

    async function acceptClickHandler(e,uid) {
        const docRef = doc(db, "jobs", uid);
        await updateDoc(docRef, {
            [`recipient.${props.collegeId}`] : "live"
        });
        removeCompany(uid)
        
        
    }
    async function rejectClickHandler(e, uid) {
        const docRef = doc(db, "jobs", uid);
        await updateDoc(docRef, {
            [`recipient.${props.collegeId}`] : "reject"
        });
        removeCompany(uid)
        
    }

    return(
        <>
            {newCompanies.map(newCompany => {
                return(
                    <div className={styles.ActiveJobs} key={newCompany.uid}>
                        <div className={styles.Job}>
                            <div className={styles.JobDescription}>
                                <div className={styles.CompanyDetails}>
                                    <div>
                                        <img src={logo} alt="Ensvee" />
                                    </div>
                                    <div>
                                        <p className={styles.CompanyName}>{newCompany.company}</p>
                                        <p className={styles.Profile}>{newCompany.title}</p>
                                    </div>
                                </div>
                                <div className={styles.ApplicantsDetails}>
                                    <button onClick={(e) => acceptClickHandler(e,newCompany.uid)} className={styles.Accept}>Accept</button>
                                    <button onClick={(e) => rejectClickHandler(e,newCompany.uid)} className={styles.Reject}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })} 
        </>
    );
    
}

export default NewCompanies;