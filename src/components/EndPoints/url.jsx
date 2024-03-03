import axios from "axios";
import { toast } from "react-toastify";

// import { useNavigate } from "react-router-dom";

export const BACKEND_URL = "https://medirent-api.onrender.com";

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// const navigate = useNavigate();
// Register User
export const TenantUser = async (userData) => {


    try {

        console.log("first email...", userData)

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     withCredentials: true
        // };

        const response = await axios.post(
            `${BACKEND_URL}/account/tenant-registration`,
            userData,
            // config
        )

        console.log("tenant account..", response)

        if (response.success === true) {
            toast.success("Tenant's account Successfully")
        }

        // navigate('/success/tenant/1')

        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};