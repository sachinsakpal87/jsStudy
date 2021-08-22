function easyHttp(){
    this.http = new XMLHttpRequest();
}

// GET Request
//Adding function to a class check DemoPrototype1.js 
easyHttp.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    this.http.send();
    const self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            return callback(null, self.http.responseText);
        }else{
            return callback('Error occurred', self.http.status);
        }
    }
    
}
// Post Request

easyHttp.prototype.post = function(url,body,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('content-type','application/json');
    this.http.send(JSON.stringify(body));
    const self = this;
    this.http.onload = function(){
        if(self.http.status===201){
            return callback(null,self.http.responseText);
        }else{
            return callback('Error occurred', self.http.status);
        }
    }
}
// PUT Request
easyHttp.prototype.put = function(url,body,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('content-type','application/json');
    this.http.send(JSON.stringify(body));
    const self = this;
    this.http.onload = function(){
        if(self.http.status===200){
            return callback(null,self.http.responseText);
        }else{
            return callback('Error occurred', self.http.status);
        }
    }
}

// DELETE Request

easyHttp.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    this.http.send();
    const self = this;
    this.http.onload = function(){
        if(self.http.status===200){
            return callback(null,'Post deleted');
        }else{
            return callback('Error occurred', self.http.status);
        }
    }
}