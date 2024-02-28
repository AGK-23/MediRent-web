import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Featured from "./components/Navbar/Featured";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import NotFound from "./pages/Error/error.jsx";
import Unauthorized from "./pages/Error/unathorized.jsx";
import Layout from "./components/Navbar/Layout.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Login from "./pages/login/Login.jsx";
import CreateTenant from "./pages/CreateTenant/CreateTenant.jsx";
import CreateLandLord from "./pages/CreateLandLord/CreateLandLord.jsx";
import SuccessLandLord from "./pages/CreateLandLord/SuccessLandLord.jsx";
import SuccessTenant from "./pages/CreateTenant/SuccessTenant.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";







import SignUp from "../src/registration/SignUp";
import SignUp5 from "../src/registration/SignUp5.jsx"
import Home from "./Home.jsx";
import Signing from "./Signed/Signing.jsx";
import CopyWrite from "./LandPage/CopyWrite.jsx";
import Medhouse from "./LandPage/Medhouse.jsx";
import Nav from "./Nav.jsx";
// import "./App.css";
import BlogPath from "./links/BlogPath.jsx";
import Purpular from "./links/Purpular.jsx";
import Pricing from "./links/Pricing.jsx";
import AboutPath from "./links/AboutPath.jsx";
import Adding from "./links/Adding.jsx";
import Cardsec from "./links/Cardsec.jsx";
import Cardthd from "./links/Cardthd.jsx";
import Addingft from "./links/Addingft.jsx";
import Messageme from "./Message/Messageme.jsx";
import Mapapi from "./LandPage/Mapapi.jsx";
import Listing from "./links/Listing.jsx";
import FaqPath from "./links/FaqPath.jsx";
import FaqPathsec from "./links/FaqPathsec.jsx";
import FaqTenant from "./links/FaqTenant.jsx";



function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > 100) {
        // You can adjust this value based on your preference
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/registration-page" element={<CreateTenant />} />
            <Route path="/auth/housing-subscription" element={<CreateLandLord />} />
            <Route path="/success/landlord/1" element={<SuccessLandLord />} />
            <Route path="/success/tenant/1" element={<SuccessTenant />} />
            <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
            {/* <Route path="/warehousing" element={<WarehousingPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/logistics" element={<LogisticsPage />} /> */}
          </Route>

          <Route path="/auth/">
            {/* <Route path="register" element={<AuthRegister />} />
            <Route path="login" element={<AuthLogin />} />
            <Route path="security-code" element={<SecurityCode />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="verify-business" element={<VerifyPage />} />
            <Route path="resetPassword/:resetToken" element={<ResetPassword />} /> */}
          </Route>

          

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
