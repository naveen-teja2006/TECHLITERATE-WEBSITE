import React from 'react'
function Profile(){
  return (
    <div className="user-profile-page">
        <h1>{localStorage.getItem("userEmail")}</h1>
    </div>
  )
}

export default Profile;