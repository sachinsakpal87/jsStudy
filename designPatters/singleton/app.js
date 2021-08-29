const Singleton = (function(){
    let instance;
    function createInstance(){
        const obj = new Object({id:1,name:"sachin"});
        return obj;
    }

    return{
        getInstance : function(){
            if (!instance){
                instance = createInstance()
            }
            return instance;
        }
    }
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a===b);