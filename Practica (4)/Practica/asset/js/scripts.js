var container = document.getElementById("c1") 
var text ="hola mundo"
container.innerText=text
container.style.backgroundColor="#000000"
container.style.color="#1cb723"
container.style.width="200px"
container.style.height="200px"
var text2 ='<input type="text" placeholder="escriba su texto">'
container.innerHTML=text2


var containers = document.querySelectorAll(".c2")

containers.forEach(element => {
    element.style.backgroundColor="#009999";
    var text3 ='<input type="text" placeholder="escriba su texto">'
element.innerHTML=text3
    
});

var boton =document.getElementById("btn-click")
boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

var btnCopy =document.getElementById("btnCopy")
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}


