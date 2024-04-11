function submitData(name, email) {
    const baseURL = 'http://localhost:3000/users';
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    const body = JSON.stringify({ name, email });

    const confugurationObject = {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({
            name:name,
            email:email,
        }),
    };

    return fetch(baseURL, confugurationObject)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            const newId = data.id;
            const idElement = document.createElement('p');
            idElement.textContent = `New ${newId}`;
            document.body.appendChild(idElement);
        })
        .catch(error => {
            const errorMessage = error.message || 'Unknown error occurred';
            const errorElement = document.createElement('p');
            errorElement.textContent = `${errorMessage}`;
            document.body.appendChild(errorElement);
        });
}

// Example usage:
submitData('Byron', 'byronn@gmail.com');

