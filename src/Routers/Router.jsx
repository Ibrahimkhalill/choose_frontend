import { createBrowserRouter } from "react-router";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
import ResetPass from "../Pages/Authentication/ResetPass";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";
import PublicRoute from "./PublicRoute";
import Landingpage from "../Pages/landing/LandingPage";

// Admin pages
import Home from "../Pages/admin/home/Home";
import AffiliateRestaurants from "../Pages/admin/resturant/AffiliateRestaurants";
import BillingMonitor from "../Pages/admin/billing/BillingMonitor";
import QRScanningTracking from "../Pages/admin/qr/QRScanningTracking";
import SettingsPage from "../Pages/admin/Settings/SettingsPage";

// Restaurant pages
import RestaurantDashboard from "../Pages/restaurant/dashboard/RestaurantDashboard";
import MenuManagement from "../Pages/restaurant/menu/MenuManagement";
import BillDataManagementPage from "../Pages/restaurant/bill/BillDataMangement";
import RestaurantAnalytics from "../Pages/restaurant/analysis/RestaurantAnalytics";
import ResSettingsPage from "../Pages/restaurant/settings/ResSettingsPage";
import AIRecommendationPage from "../Pages/landing/AIRecommendationPage";

const router = createBrowserRouter([
  // =====================================
  // ADMIN ROUTES
  // =====================================
  {
    path: "/admin",
    element: <Dashboard />, // uses the menu based on role
    children: [
      { path: "dashboard", element: <Home /> },
      { path: "restaurants", element: <AffiliateRestaurants /> },
      { path: "billing", element: <BillingMonitor /> },
      { path: "qr-tracking", element: <QRScanningTracking /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },

  // =====================================
  // RESTAURANT ROUTES
  // =====================================
  {
    path: "/restaurant",
    element: <Dashboard />, // same layout but different menus
    children: [
      { path: "dashboard", element: <RestaurantDashboard /> },
      { path: "menu", element: <MenuManagement /> },
      { path: "bills", element: <BillDataManagementPage /> },
      { path: "analytics", element: <RestaurantAnalytics /> },
      { path: "settings", element: <ResSettingsPage /> },
    ],
  },

  // =====================================
  // PUBLIC ROUTES (No login required)
  // =====================================
  {
    element: <PublicRoute />,
    children: [
      { path: "/signin", element: <SignIn /> },
      { path: "/", element: <Landingpage /> },
      { path: "/ai-recommendations", element: <AIRecommendationPage /> },
      { path: "/otp", element: <OtpVerification /> },
      { path: "/forgot_password", element: <ForgetPassword /> },
      { path: "/reset_password", element: <ResetPass /> },
    ],
  },
]);

export default router;
