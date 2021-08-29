class EventObserver{
    
    constructor(){
        this.observer = [];
    }

    subscribe(fn){
        this.observer.push(fn);
        console.log(`Subscribe to ${fn.name}`);
    }

    unsubscribe(fn){
        this.observer = this.observer.filter((item)=>{
            if(item !== fn){
                return item;
            }
        });
        console.log(`Unsubscribe from ${fn.name}`);
    }

    fire(){
        this.observer.forEach((item)=>{
            item.call();
        });
    }
}

let eventObserver = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click',function(){
    eventObserver.subscribe(getMilliSecond);
})

document.querySelector('.unsub-ms').addEventListener('click',function(){
    eventObserver.unsubscribe(getMilliSecond);
})

document.querySelector('.sub-s').addEventListener('click',function(){
    eventObserver.subscribe(getSecond);
})

document.querySelector('.unsub-s').addEventListener('click',function(){
    eventObserver.unsubscribe(getSecond);
})

document.querySelector('.fire').addEventListener('click',function(){
    eventObserver.fire();
})

function getMilliSecond(){
    let val = new Date().getMilliseconds().toString();
    console.log(val);
    document.getElementById('ms').innerHTML = val;
}

function getSecond(){
    let val = new Date().getSeconds().toString()
    console.log(val);
    document.getElementById('s').innerHTML = val;
}