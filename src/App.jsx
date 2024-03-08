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


// DASHBOARD 
import { Roles } from "./config/roles.jsx";
import RequireAuth from "./middleware/RequireAuth.jsx";
import MainDashboard from "./pages/dashboard/MainPage.jsx";
import PrivateRoute from "./middleware/PrivateRoute.jsx";
import DashboardDefault from "./components/Dashboard/Layout/Layout.jsx";
import TenantDashboard from "./components/Tenants/Layout.jsx";

import TenantMainDashboard from "./pages/TenantDashboard/MainPage.jsx"






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

// const Roles = {
//   Tenants: "Tenants",
//   Landlord: "Landlord",
// }

function App() {




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

          </Route>

          <Route element={<RequireAuth allowedRoles={[...Object.values(Roles)]} />}>
            <Route element={<PrivateRoute />}>

              <Route path="/admin/dashboard">
                <Route index element={<DashboardDefault />} />
                <Route path="landlord" element={<MainDashboard />} />
              </Route>

              <Route path="/admin/renter">
                <Route index element={<TenantDashboard />} />
                <Route path="tenant" element={<TenantMainDashboard />} />
              </Route>

            </Route>
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[...Object.values(Roles)]} />}>
            <Route element={<PrivateRoute />}>
              
            </Route>
          </Route> */}





          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
