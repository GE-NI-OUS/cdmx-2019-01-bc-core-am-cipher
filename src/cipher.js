window.cipher = {
encode:(num,msj)=> {
      let cifrando = "";
      for (let i = 0; i < msj.length; i++) {
      if (msj.charCodeAt(i) >=65 && msj.charCodeAt(i)<=90) {
      let formula3 = (msj.charCodeAt(i) - 65 + num)%26 + 65;
      let strEncode3 = String.fromCharCode(formula3);
      cifrando += strEncode3;
}     else if (msj.charCodeAt(i) >=97 && msj.charCodeAt(i)<=122) {
      let formula4 = (msj.charCodeAt(i)- 97 + num)%26 + 97;
      let strEnconde4 = String.fromCharCode(formula4);
      cifrando += strEnconde4;
}     else if (msj.charCodeAt(i) >=32 && msj.charCodeAt(i)<=64) {
      let resultadoascci = msj.charCodeAt(i);
      let resultadonormal = String.fromCharCode(resultadoascci);
      cifrando += resultadonormal
}
}
return cifrando;
},
decode: (num1,msj2)=>{
      let cifrando2 = "";
      for (let i = 0; i < msj2.length; i++) {
      if (msj2.charCodeAt(i) >=65 && msj2.charCodeAt(i) <=90) {
      let formula5 = (msj2.charCodeAt(i) + 65 - num1)%26 +65;
      let strEncode5 = String.fromCharCode(formula5);
      cifrando2 += strEncode5;
}     else if (msj2.charCodeAt(i) >=97 && msj2.charCodeAt(i) <=122) {
      let formula6 = (msj2.charCodeAt(i) -  122 -  num1)%26 + 122;
      let strEncode6 = String.fromCharCode(formula6);
      cifrando2 += strEncode6;
}     else if (msj2.charCodeAt(i) >=32 && msj2.charCodeAt(i) <=64) {
      let resultadoascci2 = msj2.charCodeAt(i);
      let resultadonormal2 = String.fromCharCode(resultadoascci2);
      cifrando2 += resultadonormal2;
}
}
return cifrando2;
}

}
