import React from 'react';
import "../styles/Dashboard.css";
import SelectRole from "../components/SelectRole.jsx";
function Dashboard() {
    let [selectedRole, setSelectedRole] = React.useState([]);
    let username = localStorage.getItem("username");
    let colorsForRoles = ["green", "blue", "orange"];
    let roleId = localStorage.getItem("roleId");
    // Progress Cards
    React.useEffect(() => {
        // Fetch User Roles from Backend API
        const fetchUserRoles = async () => {
            try {
                let token = localStorage.getItem("userToken");
                let response = await fetch("http://localhost:3000/api/userRoles", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    let data = await response.json();
                    console.log(data);
                    setSelectedRole(data.data);
                }
            } catch (error) {
                console.error("Error fetching user roles:", error);
            }
        }
        fetchUserRoles();
    }, []);
    let progress_cards = [
        { title: "Frontend Developer" }, { title: "Backend Developer" }, { title: "Full Stack Developer" }
    ];
    return (
        <>
            <div className="dashboard-section">
                <div className="welcome-message">
                    <p>Welcome <span>{username}</span> 👋</p>
                    <p className="quote-under-welcome-message">🎯 Keep Learning,Keep Building And Keep Growing.</p>
                </div>
                {/* Dashboard Header Cards */}
                <div className="dashboard-header-cards">
                    <div className="header-streak-card">
                        🔥 Streak <br /><br /> 3 days
                    </div>
                    <div className="header-no-of-carrer-roles-card">
                        📈 Carrer Roles <br /><br /> 3+
                    </div>
                    <div className="header-no-of-resources-card">
                        📚 Resources <br /><br /> 40+
                    </div>
                </div>
                <div className="carrer-role-continue-learning">
                    <h1 className="carrer-path-title">Continue Learning</h1>
                    <p className="carrer-path-description">Learn build and grow</p>
                    <div className='role-cards-dashboard'>
                        {selectedRole.map((card) => {
                            return (
                                <div key={card.id} className="carrer-role-card-dashboard">
                                    <p className="card-title">{card.role_name}</p>
                                    <p className="card-description">{card.description}</p>
                                    <button className="start-carrer-learning"
                                        style={{ background: `${colorsForRoles[card.id - 1]}` }}
                                        onClick={() => handleRoleClick(card.id)}>
                                        Explore ➡</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Users Developer Roles Progress Overview */}
                <h1 className="progress-tracking-title">Your Progress Tracking</h1>
                <div className="progress-cards">
                    {progress_cards.map((progress_card, index) => {
                        return (
                            <div className="each-progress-card" key={index}>
                                <div className="progress-track"></div>
                                <p>{progress_card.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Dashboard;