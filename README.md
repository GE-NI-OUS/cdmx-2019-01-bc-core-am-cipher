# CODING

CODING es un programa que te permite crear contraseñas seguras mediante codificación y decodificación. CODING fue creado  bajo el método [cifrado César]. Esta es una técnica de codificación por sustitución, donde cada letra de un texto es reemplazada por otra letra acorde a un número determinado de posiciones (desplazamiento) en el alfabeto.

Por ejemplo, si usamos un desplazamiento de 3 posiciones:
- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.

## Pre-requisitos e instalación
1. Antes que nada, asegúrate de tener un editor de texto en
   condiciones, algo como [Atom](https://atom.io/),
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar GNU/Linux como tu Sistema Operativo.
3. Haz tu propio [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/GENESIS-ENRIQUEZ/cdmx-2019-01-bc-core-am-cipher)
4. [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.

## Consideraciones técnicas
Este proyecto está desarrollado con:
- EMS6 JavaScript puro [JSVanilla](https://medium.com/laboratoria-developers/vanillajs-vs-jquery-31e623bbd46e).
-CSS3
-HTML5
- Se realizaron pruebas unitarias para validar la funcionalidad de codificación y decodificación. Estos test se implementaron con [Mocha](https://mochajs.org/) y assertion library de [Chai](https://www.chaijs.com/).
- Como gestor de proyecto se utilizó NPM (Node Package Manager).

## Pruebas
Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que regrese una letra acorde a la posición ingresada en el offset. Analiza que la función  cifrar retorne "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33; y que la función decifrar retorne retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33. No cifra caracteres especiales y espacios (" !@" debería retornar  " !@"', ).

## Autores
- Génesis Enríquez
## Agradecimientos

- Mitzy Yolotzin
- Abygail Romero
- Olga Contreras
- Erandi Vazquez
- Cristal García
- Brenda Vasquez
- Ameyali Brito
- Y a cada uno de los coaches en Laboratoria.

# UX-UI
El diseño UX-UI se encuentra en el siguiente link:(https://docs.google.com/document/d/1UPLKMN8fuosdjYj8GkKQduT9xuGXahQwhgPP3HRE3SY/edit?usp=sharing)
