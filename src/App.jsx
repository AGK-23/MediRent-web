import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';



// import { Roles } from "./config/roles.jsx";

// const { Roles } = lazy(() => import('./config/roles.jsx'));
const RequireAuth = lazy(() => import('./middleware/RequireAuth.jsx'));
const PrivateRoute = lazy(() => import('./middleware/PrivateRoute.jsx'));

const Layout = lazy(() => import('./components/Navbar/Layout'));
const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const ListingHome = lazy(() => import('./components/ListingHome/ListingHome'));
const Login = lazy(() => import('./pages/login/Login'));
const CreateTenant = lazy(() => import('./pages/CreateTenant/CreateTenant'));
const CreateLandLord = lazy(() => import('./pages/CreateLandLord/CreateLandLord'));
const SuccessLandLord = lazy(() => import('./pages/CreateLandLord/SuccessLandLord'));
const SuccessTenant = lazy(() => import('./pages/CreateTenant/SuccessTenant'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const DashboardDefault = lazy(() => import('./components/Dashboard/Layout/Layout'));
const MainDashboard = lazy(() => import('./pages/dashboard/MainPage'));
const TenantDashboard = lazy(() => import('./components/Tenants/Layout'));
const TenantMainDashboard = lazy(() => import('./pages/TenantDashboard/MainPage'));
const Create = lazy(() => import('./pages/CreateLandLord/Create/Create'));
const AllListing = lazy(() => import('./pages/Listing/AllListing/AllListing'));
const SinglePage = lazy(() => import('./pages/Listing/SinglePage/SinglePage'));
const TenantListing = lazy(() => import('./pages/TenantDashboard/TenantListing/TenantListing'));
const TenantSinglePage = lazy(() => import('./pages/TenantDashboard/TenantListing/TenantSinglePage'));
const Unauthorized = lazy(() => import('./pages/Error/unathorized'));
const NotFound = lazy(() => import('./pages/Error/error'));

function App() {
  return (
    <ErrorBoundary>
      <div>
        <ToastContainer />
          <Suspense fallback={<Spinner />}>
            <Routes>

                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/listings" element={<ListingHome />} />
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/registration-page" element={<CreateTenant />} />
                  <Route path="/auth/housing-subscription" element={<CreateLandLord />} />
                  <Route path="/success/landlord/1" element={<SuccessLandLord />} />
                  <Route path="/success/tenant/1" element={<SuccessTenant />} />
                  <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
                </Route>
                <Route element={<RequireAuth  />}>
                  <Route element={<PrivateRoute />}>
                      <Route path="/admin/dashboard">
                        <Route index element={<DashboardDefault />} />
                        <Route path="landlord" element={<MainDashboard />} />
                        <Route path="create/new" element={<Create />} />
                        <Route path="listing" element={<AllListing />} />
                        <Route path="listing/:id" element={<SinglePage />} />
                      </Route>

                      <Route path="/admin/renter">
                        <Route index element={<TenantDashboard />} />
                        <Route path="tenant" element={<TenantMainDashboard />} />
                        <Route path="listing" element={<TenantListing />} />
                        <Route path="tenant/listing/:id" element={<TenantSinglePage />} />
                      </Route>
                  </Route>
                </Route>
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="*" element={<NotFound />} />
              

              
            </Routes>

          </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;

