import useAuth from "../hooks/useAuth";
import { Navigate, useLocation, Outlet } from "react-router-dom";
// import { Roles } from "../../config/roles";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const { role } = useAuth();


    let requiredRoles = allowedRoles.filter(allowedRole => allowedRole.includes(role))[0]


    // console.log("roles..", role, allowedRoles, requiredRoles)

    const content = (
        requiredRoles
        ? <Outlet/>
        : <Navigate to="/auth/login" state={{ from: location }} replace />
    )
    return content;
}

export default RequireAuth;