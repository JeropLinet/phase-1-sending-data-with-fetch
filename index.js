// // Add your code here
// function submitData(){
//     let userName='Byron'
//     let userEmail='byronn@gmail.com'

//     const configurationObject={
//         method:'POST',
//         header:{
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body:JSON.stringify({
//               name:userName,
//               email:userEmail,
//         }),
//     }

//     fetch('http://localhost:3000/users',configurationObject)
//     .then(res => res.json)
//     .then(data => console.log(data))
//     .catch(error => console.error('Yea I do not have that',error))
// }

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    const body = JSON.stringify({ name, email });

    const requestOptions = {
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

    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
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

