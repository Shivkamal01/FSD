const root =document.getElementById('container');
console.log(root);
const btn =document.getElementById('btn');
const h2=document.createElement('h2');
const img=document.createElement('img');
const newDiv=document.getElementById('newDiv');
function showData(){
    //alert('hii');
    try{
    h2.innerText='Welcome to Dom';
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlalcwiAurXZRR5eX_ahQItz90j9-boFMb4bUejrqBg&s';
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    newDiv.appendChild(h2);
    newDiv.appendChild(img);
    root.style.border='2px,black, solid';
    root.appendChild(newDiv);
    btn.remove();
    }
    catch(e){
        console.log(e);
    }
    finally{

    }


}

btn.addEventListener('click', showData);