function comenzar(){
let boton= document.getElementById('next2');
boton.getEventListener("click", siguiente, false);
}

function siguiente (){
  let div1= document.getElementById('ejemplo');
  let div2= document.getElementById('pantalla2');
  div1.style.display="none";
  div2.style.display="contents";
}
