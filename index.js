// function add(a , b){
//     return a + b ;
//     return Math.sqrt
// }

// console.log(add(5 , 10))

// const squareSum =(a,b)=>{return Math.sqrt(a)+Math.sqrt(b)}
// console.log(squareSum(4,9))

// (()=>{
//     console.log("hey...using IIFE")
// })();

// let a=9;
// if (a<30){
//     let a=30;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)

// call back 
// function sum(a,b){
//     return a=b;
// }
// function msgWithSum(clbk, msg){
//     const result=clbk(20,10);
//     console.log("hii "+ msg+ " your result is = "+result)
// }
// msgWithSum(sum, "shiv")

// function login( error , msg){
//     if (error){
//         console.log("Error "+ error)

//     }
//     else {
//         console.log(msg)
//     }
// }
// function loginHandler(username, password, clbk){
//     if (username== "shivkamal01" && password=="12345"){
//         clbk(null , "Login Succes")
//     }
//     else{
//         clbk("Username and password is Incorrect ",null)
//     }
// }

// loginHandler("shivkamal01", "123456", login)

// console.log("one")
// for(i=0; i<10000; i++){
//     console.log("i=" + i)
// }
// console.log("three")

const container = document.getElementById('container'); // it is function of dom
const button = document.getElementById('btn');

const h1 = document.createElement('h1');
console.log(h1)
h1.innerText = 'Abes Eng College';
// console.log(button)
// console.log(container)
const loader=document.createElement('h2');
container.appendChild(loader);
const img=document.createElement('img');

function ping() {
    // alert('server ping')
    try{
    loader.innerHTML='<h2>Loading data....</h2>'
    container.innerHTML = '<h2>welcome to dom<h2>'
    h1.style.backgroundColor='cyan';
    h1.style.color='red';
    container.appendChild(h1);
    img.src="https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-student-flat-portrait-of-man-png-image_14639684.png";
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);
    }
    catch(e){
        loader.innerHTML='<h2>style=color:red> Error in loading Data</h2>'
    }
    finally{
        container.removeChild(loader);
    }
}

button.addEventListener('click', ping);