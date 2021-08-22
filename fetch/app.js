document.getElementById('getText').addEventListener('click', getText)


// function getText() {
//     fetch('data.txt').then(function (resposne) {
//         return resposne.text();
//     }).then(function (data) {
//         document.querySelector('.output').innerHTML = data;
//     });
// }

function getText() {
    fetch('data.txt')
    .then((resposne) => resposne.text())
    .then((data) => document.querySelector('.output').innerHTML = data);
}

document.getElementById('getJson').addEventListener('click', getJson);

function getJson() {
    fetch('user.json').then(function(response){
        return response.json();
    }).then(function(data){
        let output = `
        <li> ID : ${data.id} </li>
        <li> Name : ${data.name} </li>
        <li> Company : ${data.company} </li>
        `
        document.querySelector('.output').innerHTML = output;
    })
}

document.getElementById('getApi').addEventListener('click',getApi);

function getApi(){
    fetch('https://api.github.com/users').then((response) => {
        return response.json();
    }).then((data)=> {
        let output;

        data.forEach((user)=>{
            output += `<li> user : ${user.login} </li>`;
        });

        document.querySelector('.output').innerHTML = output;
    })
}