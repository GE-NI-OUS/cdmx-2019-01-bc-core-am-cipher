
function cifrar (){
  const cadena = document.getElementById("mensaje").value.toUpperCase();
  const offset = parseInt(document.getElementById("desplazamiento")).value;
  document.getElementById("cifra").innerHtml = cipher.enconde(cadena,offset));
}

//const boton = document.getElementById('cifra');
//boton.addEventListener("click",window.cipher.cifrar());
