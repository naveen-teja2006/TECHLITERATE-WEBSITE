// This Provides The API
let API = "http://localhost:3000/api";
export async function getUser() {
    let response = await fetch(`${API}/users`);
    let data = await response.json();
    return data;
}

export async function getRoles(){
    let response = await fetch(`${API}/choose-role`);
    let data = await response.json();
    return data;
} 

