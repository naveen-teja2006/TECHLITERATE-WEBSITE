import React from 'react';
import { useNavigate } from "react-router-dom";
import "./SelectRole.css";
import { getRoles } from "../services/api";
import "../styles/Dashboard.css";
function SelectRole() {
    let navigate = useNavigate(); // For navigating after selection
    // Colors For Roles
    let colorsForRoles = ["green", "blue", "orange"];
    let [message, setMessage] = React.useState("");
    // Select the role here
    let [selectedRole, setSelectedRole] = React.useState([]);
    let [carrer_roles_cards, set_carrer_roles_cards] = React.useState([]);
    let [roleSelected, setRoleSelected] = React.useState(false);
    let [saved,setSaved] = useState(false)
    React.useEffect(() => {
        async function fetchRoles() {
            let response = await getRoles(); // Get roles from backend
            let data = await response.data;
            set_carrer_roles_cards(data);
        }
        fetchRoles();
    }, []);
    // Clicking on the role
    async function handleRoleClick(roleId) {
        let newSelectedRoles = selectedRole.includes(roleId) ? selectedRole : [...selectedRole, roleId];
        setSelectedRole(newSelectedRoles);
        const response = await saveRoles(newSelectedRoles);
        localStorage.setItem("roleId", roleId);
    }
    // Save roles in the database with respective to the user
    async function saveRoles(roleIds) {
        const token = localStorage.getItem("userToken");
        let response = await fetch("http://localhost:3000/api/userRoles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                roleIds: roleIds
            })
        })
        const data = await response.json();
        if (!response.ok) {
            console.log(data.message || "Error Saving Roles");
        }
        setMessage(data.message);
        setRoleSelected(true);
        setSaved(true);
        return data;
    }
    return (
        <>
            <div className="choose-role-title">
                <h1>Choose Your Career Role</h1>
                <p>• Learn • Build • Grow</p>
            </div>
            <div className="carrer-roles-cards">
                {carrer_roles_cards.map((card, index) => {
                    return (
                        <div key={index} className="carrer-page-card">
                            <img src={`${card.image_url}`} />
                            <p className="card-title">{card.role_name}</p>
                            <p className="card-description">{card.description}</p>
                            <button className="start-carrer-learning"
                                style={{ background: `${colorsForRoles[index]}` }}
                                onClick={() => handleRoleClick(card.id)}>
                                Explore ➡</button>
                        </div>
                    )
                })}
            </div>
            <div className='after-roles-selection-btn'>
                <button onClick={() => roleSelected ? navigate("/dashboard") : navigate("/choose-role")}>Go To Dashboard</button>
            </div>
            <div>
                <h1>{message}</h1>
            </div>
        </>
    )
}
export default SelectRole;