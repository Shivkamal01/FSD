const container=document.getElementById('container');
const button=document.getElementById('id');
const h1=document.createElement('h1');
console.log(h1);
h1.innerText='Shiv Kamal';
console.log(container);
console.log(button);






function ping(){
    container.appendChild(h1);
}
button.addEventListener('click', ping);