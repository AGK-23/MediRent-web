

const useAuth = () => {

    let userInfo = {
        _id: 1,
        firstname: "john",
        lastname: "Doe",
        email: "johndoe@gmail.com",
        role: "Tenants"
    }
    console.log("userInfo..", userInfo)
    localStorage.setItem("token", JSON.stringify(userInfo));


    // Retrieve the stringified object from local storage
    const storedToken = localStorage.getItem('token');


    // Parse the stringified object back to its original form
    const userDetails = JSON.parse(storedToken);

    console.log("all the role..", storedToken, userDetails);

    let isLandLord = false;
    let isTenants = false;
    let status = "Tenants";
    const role = userDetails?.role;


    if (userDetails) {
        isTenants = userDetails?.role === "Tenants";
        isLandLord = userDetails?.role === "Landlord";


        if (isLandLord) status = "Landlord";
        if (isTenants) status = "Tenants";

        console.log("real time role..", status)

        // return {
        //     roles,
        //     status,
        //     isTenants,
        //     isLandLord,
        // }
    }

    console.log("all the money..", role,
    status,
    isTenants,
    isLandLord,
    userDetails)

    return {
        role,
        status,
        isTenants,
        isLandLord,
        userDetails
    }
};

export default useAuth;
