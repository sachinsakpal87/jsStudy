document.getElementById('button').addEventListener('click', function () {

    // Create XHR object
    const xhr = new XMLHttpRequest();


    console.log(this.responseText);

    console.log('READY STATE '+xhr.readyState);

    // Open
    xhr.open('GET', 'data.txt', true);
    console.log('READY STATE '+xhr.readyState);

    xhr.onprogress = function(){
        
        console.log('READY STATE '+xhr.readyState);
        
    }

    xhr.onload = function(){
        console.log('READY STATE '+xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);

            document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    }


    xhr.onerror = function(){
        console.log('Error');
    }

    //Older syntax

    // xhr.onreadystatechange = function () {
    //     console.log(this.readyState)
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
});