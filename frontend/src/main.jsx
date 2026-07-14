import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./Landing Page/home/HomePage";
import SignUp from "./Landing Page/signup/SignUp.jsx";
import AboutPage from "./Landing Page/about/AboutPage.jsx";
import PricingPage from "./Landing Page/pricing/PricingPage.jsx";
import SupportPage from "./Landing Page/support/SupportPage.jsx";
import ProductPage from "./Landing Page/products/ProductPage.jsx";
import Footer from "./Landing Page/Footer.jsx";
import Navbar from "./Landing Page/Navbar.jsx";
import NotFound from "./Landing Page/NotFound.jsx";
import Login from "./Landing Page/login/Login.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
        </Route>

        <Route path="/dashboard/*" element={<Dashboard />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);