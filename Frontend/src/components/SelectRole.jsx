import React from 'react';
import { useNavigate } from "react-router-dom";
import "./SelectRole.css";
import { getRoles } from "../services/api";
import "../styles/Dashboard.css";
function SelectRole() {
    let navigate = useNavigate(); // For navigating after selection
    // Colors For Roles
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
    console.log(selectedRole);
    // Handle The Role Click
    async function handleRoleClick(roleId) {
        let newSelectedRoles = selectedRole.includes(roleId) ? selectedRole : [...selectedRole,roleId];
        setSelectedRole(newSelectedRoles);
        const response = await saveRoles(newSelectedRoles);
        localStorage.setItem("roleId",roleId);
        navigate("/dashboard");
    }

    async function saveRoles(roleIds){
        const token = localStorage.getItem("userToken");
         let response = fetch("http://localhost:3000/api/userRoles",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                roleIds:roleIds
            })
        })
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Error Saving Roles");
        }
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
        </>
    )
}
export default SelectRole;