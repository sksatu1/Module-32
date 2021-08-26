function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => getUserInfo(data))
}

function getUserInfo(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}   EMAIL: ${user.email}`;
        ul.appendChild(li);
    }
}