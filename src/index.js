//Evento botón entrar primera pantalla//
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
//Evento botón logout segunda pantalla//
function regresar (){
  let boton_back = document.getElementById('back1');
  boton.getEventListener("click", atras, false);
}
function atras(){
  let div2 = document.getElementById('pantalla2');
  let div1 = document.getElementById('ejemplo');
  div2.style.display="none";
  div1.style.display="contents";
}
//Evento botón continuar segunda pantalla//
function adelante (){
  let boton2= document.getElementById('start');
  boton2.getEventListener("click", continuar, false);
}
function continuar(){
 let div2 = document.getElementById('pantalla2');
 let div3 = document.getElementById('pantalla3');
 div2.style.display="none";
 div3.style.display="contents";
}
//Evento botón logout tercera pantalla//
function regresar2(){
  let boton_back2 = document.getElementById('back2');
  boton_back2.getEventListener("click", atras2, false);
}
function atras2(){
  let div3 = document.getElementById('pantalla3');
  let div1= document.getElementById('ejemplo');
   div3.style.display="none";
   div1.style.display="contents";
}
//Evento botón Instrucciones tercera pantalla//
function back_listado(){
  let boton_instrucciones = document.getElementById('instrucciones1');
 boton_instrucciones.getEventListener("click", instrucciones2, false);
  }
function instrucciones2(){
  let div3 = document.getElementById('pantalla3');
  let div2 = document.getElementById('pantalla2');
   div3.style.display="none";
   div2.style.display="contents";
}
