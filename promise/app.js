//Refer callback script for Promise
//We are modifying the same script to use promise instead of callback

let posts = [{title: "Post One", body:"This is the first post"},{title: "Post Two", body:"This is the second post"}];

function createPost(post){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error occurred !!');
            }
        },2000)
    });
    
}
function getPost(){

let output = '';
setTimeout(function(){
    posts.forEach(function(post){
        output += `<ul><li>${post.title}</li></ul>`;
    });
    document.body.innerHTML = output;
},1000);
}

createPost({title: "Post Three", body:"This is the third post"}).then(getPost).catch(function(error){
    console.log(error);
});