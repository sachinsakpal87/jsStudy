const ulItem = document.querySelector('ul');

const liItem = document.querySelectorAll('li');

liItem.forEach((item,index) => {
    console.log(`${item.textContent.trim()} : ${index}`);
})
