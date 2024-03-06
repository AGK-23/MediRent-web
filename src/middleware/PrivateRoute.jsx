import { Navigate } from 'react-router-dom';

import DashboardDefault from "../components/Dashboard/Layout/Layout.jsx";
// import jwtDecode from 'jwt-decode';



const PrivateRoute = () => {
    const storedToken = localStorage.getItem('token');




    return storedToken ?
        <DashboardDefault />
        :
        <Navigate to='/auth/login' replace />;
}

export default PrivateRoute