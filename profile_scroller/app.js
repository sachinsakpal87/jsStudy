const data = [
    {
        name: 'John doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Kane',
        age: 30,
        gender: 'male',
        lookingfor: 'female',
        location: 'Washington DC',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }
];

const profileItr = profileIterator(data);

// Call first profile

nextProfile()

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const profile = profileItr.next().value;

    if (profile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
        <li class='list-group-item'> Name : ${profile.name}</li>
        <li class='list-group-item'> Age : ${profile.age}</li>
        <li class='list-group-item'> Location : ${profile.location}</li>
        <li class='list-group-item'> Preference : ${profile.gender} looking for ${profile.lookingfor}</li>        
        </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src=${profile.image}></img>`
    }else{
        // No more profile
        window.location.reload();
    }
}

function profileIterator(profile) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profile.length
                ?
                { value: profile[nextIndex++], done: false } :
                { done: true };
        }
    }
}