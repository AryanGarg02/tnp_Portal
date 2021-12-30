import EnsveeLogo from '../../assets/EnsveeWhite.svg'
import styles from './nav.module.css';
import { getAuth, signOut } from "firebase/auth";



function SideNav() {

    const logoutHandler = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return(
        <>
        <div className={styles.LeftPanel}>
            <div className={styles.BigContainer}>
                <img src={EnsveeLogo} alt="Ensvee" />
                <ul>
                    <li className={[styles.NavComp, styles.Active].join(" ")}>Home</li>
                    <li className={styles.NavComp}>Students</li>
                </ul>
            </div>
            <div className={styles.Logout}>
                <a onClick={logoutHandler}>Log Out</a>
            </div>
        </div>              

        </>

    );
    
}



export default SideNav;