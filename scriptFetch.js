console.log("JS07 Fetch API");

const getUsers = (page = 1) => {
    const url = `https://reqres.in/api/users?delay=3`;
    


    fetch(url)
        .then( response=> response.json())
        .then( users => {
           

            for ( let user of users.data)
              document.getElementById('data').innerHTML += 
              `<tr>
                <td id="id">${user.id}</td>
                <td id="firstName">${user.first_name}</td>
                <td id="lastName">${user.last_name}</td>
                <td id="email">${user.email}</td>
                <td><img id="avatar" src="${user.avatar}"></td>
                </tr>`

        })
        .catch( error => console.log(error));
};