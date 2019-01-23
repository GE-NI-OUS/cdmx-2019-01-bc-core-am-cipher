const offset = document.getElementById("offset");
const cadena = document.getElementById("cadena");
const boton = document.getElementById("cifrar");
const boton2 = document.getElementById("descifrar");

boton.addEventListener("click", ()=> {
  let num1 = offset.value;
  let num = parseInt(num1);
  let msj = cadena.value;
  document.getElementById("textoC").value = window.cipher.encode(num,msj);

});

boton2.addEventListener("click", ()=>{
  let num = offset.value;
  let num1 = parseInt(num);
  let msj2 = cadena.value;
  document.getElementById("textoC").value = window.cipher.decode(num1,msj2);
})
