// (function(){
// Declare private function and variables 
//
//
//  return {
//  Declare public function and variables    
// }
// })();



// const moduleFun = (function(){
//     let text = 'Hey There !!';

//     function getChangedText(){
//         return console.log(text);
//     }

//     return{
//         callChangeText : function (){
//             getChangedText();
//             // console.log(text);
//         }
//     }
// })();

// moduleFun.callChangeText();


const ItemCtrl = (function(){
    let arr = [];
    function get(){
        return arr.pop();
    }
    function set(item){
        arr.push(item);
        console.log('Item added '+item);
    }

    return {
        get: get,
        set: set
    }
})();

ItemCtrl.set(1);
ItemCtrl.set(2);
ItemCtrl.set(3);
console.log(ItemCtrl.get());
console.log(ItemCtrl.get());
console.log(ItemCtrl.get());