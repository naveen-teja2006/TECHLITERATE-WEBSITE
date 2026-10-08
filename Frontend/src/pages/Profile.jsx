import React from 'react';
import "../styles/Profile.css";
function Profile() {
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("userEmail");
  return (
    <div className="user-profile-page">
      <div className="profile-info">
        <h1 className="username">Username : {username}</h1>
      <h1 className='useremail'>Email : {email}</h1>
      </div>
    </div>
  )
}

export default Profile;