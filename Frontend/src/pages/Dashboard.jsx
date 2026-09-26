import React from 'react';
import "../styles/Dashboard.css";
import { getRoles, getUser } from "../services/api";
// import { jwtDecode } from "jwt-decode";
import SelectRole from "../components/SelectRole.jsx";
function Dashboard() {
    let username = localStorage.getItem("username");
    console.log(username);
    let colorsForRoles = ["green", "blue", "orange"];
    // Select the role here
    let [selectedRole, setSelectedRole] = React.useState([]);
    let [carrer_roles_cards, set_carrer_roles_cards] = React.useState([]);
    React.useEffect(() => {
        async function fetchRoles() {
            let response = await getRoles(); // Get roles from backend
            let data = response.data;
            set_carrer_roles_cards(data);
        }
        fetchRoles();
    }, []);
    let roleId = localStorage.getItem("roleId");
    let selectedRoles = carrer_roles_cards.filter((each_card) => {
        return each_card.id == roleId;
    });
    // Progress Cards
    let progress_cards = [{
        title: "Frontend Developer"
    }, { title: "Backend Developer", }, {
        title: "Full Stack Developer",
    }
    ];
    // Fetch And Display The Username
    // React.useEffect(() => {
    //     async function fetchUser() {
    //         try {
    //             let response = await getUser();
    //             console.log(response);
    //         }
    //         catch (error) {
    //             console.log("Error Fetching the data", error);
    //         }
    //     }
    //     fetchUser();
    // }, []);
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
                        {selectedRoles.map((card) => {
                            return (
                                <div key={card.id} className="carrer-role-card-dashboard">
                                    <img src={`${card.image_url}`} />
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