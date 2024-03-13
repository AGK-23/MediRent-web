

const useAuth = () => {

    // let userInfo = {
    //     _id: 1,
    //     firstname: "john",
    //     lastname: "Doe",
    //     email: "johndoe@gmail.com",
    //     accountType: "LandLord"
    // }
    // console.log("userInfo..", userInfo)
    // localStorage.setItem("token", JSON.stringify(userInfo));


    // Retrieve the stringified object from local storage
    const storedToken = localStorage.getItem('token');


    // Parse the stringified object back to its original form
    const userDetails = JSON.parse(storedToken);

    console.log("all the role..", storedToken, userDetails);

    let isLandLord = false;
    let isTenants = false;
    let status = "LandLord";
    const role = userDetails?.accountType;


    if (userDetails) {
        isTenants = userDetails?.accountType === "Tenant";
        isLandLord = userDetails?.accountType === "LandLord";


        if (isLandLord) status = "LandLord";
        if (isTenants) status = "Tenant";

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
