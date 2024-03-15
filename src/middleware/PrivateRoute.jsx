import { Navigate } from 'react-router-dom';

import DashboardDefault from "../components/Dashboard/Layout/Layout.jsx";
import TenantDashboard from "../components/Tenants/Layout.jsx";
// import jwtDecode from 'jwt-decode';



const PrivateRoute = () => {
    const storedToken = localStorage.getItem('token');

    const userDetails = JSON.parse(storedToken);

    console.log("private note..", userDetails, "user..", userDetails?.accountType)

    if (userDetails) {
        if (userDetails?.accountType === "Landlord") {
            console.log("man");
            return <DashboardDefault />;
        }
        if (userDetails?.accountType === "Tenant") {
            console.log("object");
            return <TenantDashboard />;
        } 
    }

    return <Navigate to='/auth/login' replace />;



}

export default PrivateRoute