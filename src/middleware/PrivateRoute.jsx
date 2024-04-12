import { Navigate } from 'react-router-dom';

import DashboardDefault from "../components/Dashboard/Layout/Layout.jsx";
import TenantDashboard from "../components/Tenants/Layout.jsx";
// import jwtDecode from 'jwt-decode';



const PrivateRoute = () => {
    const storedToken = localStorage.getItem('token');

    const userDetails = JSON.parse(storedToken);

    console.log("private note..", userDetails, "user..", userDetails?.Data?.AccountType)

    if (userDetails) {
        if (userDetails?.Data?.AccountType === "Landlord") {
            // console.log("man");
            return <DashboardDefault />;
        }
        if (userDetails?.Data?.AccountType === "Tenant") {
            // console.log("object");
            return <TenantDashboard />;
        } 
    }

    return <Navigate to='/auth/login' replace />;



}

export default PrivateRoute