const http = new easyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err, response){
// if(err){
//     console.log(err);
// }else{
//     console.log(response);
// } 
// });

// const post  = {
//     "userId" : 1,
//     "title": "cust title",
//   "body": "cust body"
// }
// http.post('https://jsonplaceholder.typicode.com/posts',post,function(err, response){
// if(err){
//     console.log(err);
// }else{
//     console.log(response);
// } 
// });

// const putBody  = {
//     "userId" : 1,
//     "title": "cust title",
//   "body": "cust body"
// }
// http.put('https://jsonplaceholder.typicode.com/posts/1',putBody,function(err, response){
// if(err){
//     console.log(err);
// }else{
//     console.log(response);
// } 
// });

http.delete('https://jsonplaceholder.typicode.com/posts/5',function(err, response){
if(err){
    console.log(err);
}else{
    console.log(response);
} 
});