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

console.log("one")
for(i=0; i<10000; i++){
    console.log("i=" + i)
}
console.log("three")