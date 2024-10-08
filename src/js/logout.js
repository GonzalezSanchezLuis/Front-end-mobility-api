
export function logout(){
    let logout = document.getElementById("logout");
    if (logout) {
        logout.addEventListener("click", () => { 
        //DESARROLLO
        // let url = "http://localhost:8080";
        
        //PRODUCCION 
        let url = "https://fiver.up.railway.app";

    let token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found, cannot logout");
        return;
    }

    fetch(`${url}/api/v1/auth/logout`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            localStorage.removeItem("token");
             alert('You have been logged out successfully');
             window.location.href = "./login.html";

        }else{
            return response.json().then(error =>{
                throw new Error('Logout failed: ' + (error.message || response.statusText));
            });
        }
       
    })
   .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('Error: '+ error.message);
    });
})
}        
}


