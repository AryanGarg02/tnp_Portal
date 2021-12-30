import react from 'react';
import  {Route, Navigate} from 'react-router-dom'

const ProtectedRoute = (props)=>{
    const {user,children} = props;
    return !user ? <Navigate to="/login" replace/> : children;
}

export default ProtectedRoute;