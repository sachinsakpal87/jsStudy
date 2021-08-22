let posts = [{title: "Post One", body:"This is the first post"},{title: "Post Two", body:"This is the second post"}];

function createPost(post,callback){

    setTimeout(function(){
        posts.push(post);
        callback();
    },2000)
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

createPost({title: "Post Three", body:"This is the third post"},getPost);