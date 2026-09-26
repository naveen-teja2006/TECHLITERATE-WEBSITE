import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";
function Navbar() {
    let hideNavbar = "/signin".includes(location.pathname);
    let navigate = useNavigate();
    function signOut() {
        navigate("/signin");
    }
    function splashScreen() {
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
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-title">TechLiterate</div>
                <nav>
                    <NavLink to="/home" className="nav-link" ><IoHome /> Home</NavLink>
                    <NavLink to="/dashboard" className="nav-link" ><LuLayoutDashboard /> Dashboard</NavLink>
                    <NavLink to="/resources" className="nav-link" ><GrResources /> Resources</NavLink>
                    <NavLink to="/skills" className="nav-link" ><GoGraph /> Skills</NavLink>
                    <NavLink to="/progress" className="nav-link" ><GiProgression /> Progress</NavLink>
                    <NavLink to="/profile" className="nav-link" ><CgProfile /> Profile</NavLink>
                    <NavLink to="/signout" className="nav-link" ><SlLogout /> Log out</NavLink>
                </nav>
                {/* <button className="toggle-menu" onClick={() => setIsNavbarOpen(!IsNavbarOpen)}>Click</button> */}
            </div>
        </>
    )
}

export default Navbar;