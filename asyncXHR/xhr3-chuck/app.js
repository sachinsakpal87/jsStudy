document.querySelector('.getJokes').addEventListener('click', getJokes);

function getJokes(e) {
    const numbJokes = document.getElementById('numJokes').value;

    const xhr = new XMLHttpRequest();
    
    // GET a API request
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numbJokes}`, true);

    // Once the API is loaded
    xhr.onload = function () {
        let output = '';
        if (this.status === 200) {
            
            const jokes =  JSON.parse(this.responseText);
            if(jokes.type === "success"){
                jokes.value.forEach((joke)=> {
                    output += `<li>${joke.joke}</li>`
                })
            }else{
                output += `<li>Something went wrong</li>`;
            }
        } 

        document.querySelector('.jokes').innerHTML = output;
    };

    // Send the resposne
    xhr.send();

    
    e.preventDefault();
}