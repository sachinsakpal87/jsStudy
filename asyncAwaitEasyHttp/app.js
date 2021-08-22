const http = new AEasyHttp();

http.get('https://jsonplaceholder.typicode.com/users').then(
    (data) => {
        console.log(data);
        // data.forEach((post)=> console.log(post))
    });


const user = {
    "name": "Sachin Sakpal",
    "username": "sachinsakpal87",
    "email": "sachin@gmail.com",
    "address": {
        "street": "Katepuram",
        "suite": "phase 2",
        "city": "Pune",
        "zipcode": "411061",
        "geo": {
            "lat": "-21.3159",
            "lng": "71.1496"
        }
    },
    "phone": "8880552790",
    "website": "nomad.org",
    "company": {
        "name": "AD",
        "catchPhrase": "Bhag",
        "bs": "sw"
    }
};

http.post('https://jsonplaceholder.typicode.com/users',user).then((data)=> console.log(data));

http.put('https://jsonplaceholder.typicode.com/users/9',user).then((data)=> console.log(data));

http.delete('https://jsonplaceholder.typicode.com/users/8').then((data)=> console.log(data));