import react from "react";
import Logo from '../../assets/ensveeLogo.svg'


const AuthHeader = ()=>{
    return(      
    <div className = "header">
        <div className ="ensvee">
            <img src={Logo} className="logo" alt="Ensvee" />
        </div>  
    </div>
  )
}

export default AuthHeader;