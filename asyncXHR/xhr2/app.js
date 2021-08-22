document.getElementById('button1').addEventListener('click',getCustomer);

document.getElementById('button2').addEventListener('click',getCustomers);

function getCustomer(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customer.json',true);

  xhr.onload =  function(){
      if(this.status === 200){
          const customer = JSON.parse(this.responseText);
          const output = `
          <ul>
          <li>ID : ${customer.id}</li>
          <li>Name : ${customer.name}</li>
          <li>Company : ${customer.company}</li>
          <li>Phone : ${customer.phone}</li>
          </ul>
          `;
          document.getElementById('output1').innerHTML = output;
      }
  }
  xhr.send();
};

function getCustomers(){
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET','customers.json',true);
  
    xhr.onload =  function(){
        if(this.status === 200){
            let output = '';
            const customers= JSON.parse(this.responseText);
            
            customers.forEach(function(customer) {
                output += `
            <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone : ${customer.phone}</li>
            </ul>
            `;
            });
            
            document.getElementById('output2').innerHTML = output;
        }
    }
    xhr.send();
  };