import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import SignIn from "./pages/SignIn.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Resources from "./pages/Resources.jsx";
import Skills from "./pages/Skills.jsx";
import Footer from "./components/Footer.jsx";
import SplashScreen from "../src/pages/splashScreen.jsx";
import "./styles/App.css";
import SelectRole from "./components/SelectRole.jsx";
let root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    let location = useLocation(); // It is used in routing only
    let hideNavbar = ['/', '/register', '/signin', "/choose-role"].includes(location.pathname);
    // For setting timeout for the splash screen
    let [splashScreen, setSplashScreen] = React.useState(true);
    React.useEffect(() => {
        let splashScreenTime = setTimeout(() => {
            setSplashScreen(false);
        }, 3000);
        return () => clearTimeout(splashScreenTime)
    }, []);
    if (splashScreen) {
        return <SplashScreen />
    }
    return (
        <>
            <div className="layout">
                {!hideNavbar && (
                    <div className="navbar-layout">
                        <Navbar />
                    </div>
                )}
                <div className="pages-layout" style={{ marginLeft: hideNavbar ? "0px" : '288px' }}>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/" element={<Register />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/signin" element={<SignIn />}></Route>
                        <Route path="/resources" element={<Resources />}></Route>
                        <Route path="/choose-role" element={<SelectRole />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/skills" element={<Skills />}></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
};
root.render(<BrowserRouter><App /></BrowserRouter>);