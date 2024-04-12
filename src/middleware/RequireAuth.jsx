import useAuth from "../hooks/useAuth";
import { Navigate, useLocation, Outlet } from "react-router-dom";
// import { Roles } from "../../config/roles";

const RequireAuth = () => {
    const location = useLocation();
    const { role } = useAuth();

    const roles = {
        Tenant: "Tenant",
        Landlord: "Landlord",
    }

    let allowedRoles = Object.values(roles)
    console.log("all the role..", allowedRoles)


    let requiredRoles = allowedRoles.filter(allowedRole => allowedRole.includes(role))[0]


    console.log("roles..", role, allowedRoles, requiredRoles)

    const content = (
        requiredRoles
        ? <Outlet/>
        : <Navigate to="/auth/login" state={{ from: location }} replace />
    )
    return content;
}

export default RequireAuth;