function  fetchData(url, method, callback, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log("Ocurrió un error! " + error));
}