import { token } from './helpers.js'
export function getLocationById(id) {
    //DESARROLLO
    // let url = "http://localhost:8080";

    //PRODUCCION 
    let url = "https://fiver.up.railway.app";

    let editForm = document.getElementById("edit-form");

    token(`${url}/api/v1/route/get/${id}`, {
        method: 'GET',
    })
    .then(location => {
        console.log('Location data:', location);

        if (editForm) {
        let originInput = editForm.elements["origen"].value = location.originName;
        let destinationInput = editForm.elements["destinationName"].value = location.destinationName;
        
        } else {
            console.error("Elementos del formulario no encontrados");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);

    });
}

// Función de ejemplo para obtener el ID de la URL
export function getLocationIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

export function update(id) {
    //DESARROLLO
    //let url = "http://localhost:8080";
    
    //PRODUCCION 
    let url = "https://fiver.up.railway.app";

    let editForm = document.getElementById("edit-form");

    if (editForm) {
        editForm.addEventListener("submit", e => {
            e.preventDefault();

            let originInput = editForm.elements["origen"].value;
            let destinationInput = editForm.elements["destinationName"].value;
            let updateData = {
                originName: originInput,
                destinationName: destinationInput
            };

            token(`${url}/api/v1/route/update/${id}`, {
                method: 'PUT', // Asegúrate de usar el método correcto
                body: JSON.stringify(updateData)
            })
            .then(data => {
                console.log('Success:', data);
                window.location.href = './dashboard.html';
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Error: ' + error.message);
            });
        });
    } else {
        console.error('Edit form not found');
    }
}





