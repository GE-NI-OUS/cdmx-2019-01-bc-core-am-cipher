window.cipher = {
encode:(num,msj)=> {
    let cifrando = "";
    for (let i = 0; i < msj.length; i++) {
      let formula = (msj.charCodeAt(i) - 65 + num)% 26 +65;
      let strEnconde = String.fromCharCode(formula);
      cifrando+=strEnconde;
      debugger;
  }
return cifrando;
debugger;
},
decode: (num1,msj2)=>{
  let cifrando2 = "";
  for (let i = 0; i < msj2.length; i++) {
    let formula2 = (msj2.charCodeAt(i) + 65 - num1)% 26 +65;
    let strEnconde2 = String.fromCharCode(formula2);
    cifrando2+=strEnconde2;
}
return cifrando2;
}
}
