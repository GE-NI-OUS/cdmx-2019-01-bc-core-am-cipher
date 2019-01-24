const offset = document.getElementById("offset");
const cadena = document.getElementById("cadena");
const boton = document.getElementById("cifrar");
const boton2 = document.getElementById("descifrar");
const boton3 = document.getElementById('contacto');
const boton4 = document.getElementById("info");
const boton5 = document.getElementById ("logoboton");
const boton_entrar = document.getElementById('entrar');
const boton_refresh = document.getElementById('limpiar');

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
});

boton_entrar.addEventListener("click", ()=> {
  let div1 = document.getElementById('primera_pantalla');
  let div2 = document.getElementById('principal_screen');
  let div3 = document.getElementById('contac');
  let div4 = document.getElementById("info_code");
  div1.style.display = "none";
  div4.style.display = "none";
  div3.style.display = "none";
  div2.style.display = "flex";
});

boton3.addEventListener("click", ()=> {
  let div1 = document.getElementById('primera_pantalla');
  let div2 = document.getElementById('principal_screen');
  let div3 = document.getElementById('contac');
  let div4 = document.getElementById("info_code");
  div1.style.display = "none";
  div2.style.display = "none";
  div4.style.display = "none";
  div3.style.display = "flex";
});

boton4.addEventListener("click", ()=> {
  let div1 = document.getElementById('primera_pantalla');
  let div2 = document.getElementById('principal_screen');
  let div3 = document.getElementById('contac');
  let div4 = document.getElementById("info_code");
  div1.style.display = "none";
  div2.style.display = "none";
  div4.style.display = "flex";
  div3.style.display = "none";
});

boton5.addEventListener("click", ()=>{
  let div1 = document.getElementById('primera_pantalla');
  let div2 = document.getElementById('principal_screen');
  let div3 = document.getElementById('contac');
  let div4 = document.getElementById("info_code");
  div2.style.display = "none";
  div4.style.display = "none";
  div3.style.display = "none";
  div1.style.display = "flex";
});

boton_refresh.addEventListener("click", ()=>{
  document.getElementById('formulario').reset();
})
