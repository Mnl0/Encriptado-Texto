function encriptar(texto) {
  texto = document.getElementsByName("texto-encriptar")[0].value;

  let textoRemapE = texto.replace(/e/g, "enter");
  let textoRempI = textoRemapE.replace(/i/g, "imes");
  let textoRempA = textoRempI.replace(/a/g, "ai");
  let textoRempO = textoRempA.replace(/o/g, "ober");
  let textoRempU = textoRempO.replace(/u/g, "ufat");
  let textoEncriptado = textoRempU;

  document.getElementsByName("texto-desencriptar")[0].value = textoEncriptado;
}

function desencriptar(texto) {
  texto = document.getElementsByName("texto-encriptar")[0].value;

  let textoRemapE = texto.replace(/enter/g, "e");
  let textoRempI = textoRemapE.replace(/imes/g, "i");
  let textoRempA = textoRempI.replace(/ai/g, "a");
  let textoRempO = textoRempA.replace(/ober/g, "o");
  let textoRempU = textoRempO.replace(/ufat/g, "u");
  let textoEncriptado = textoRempU;

  document.getElementsByName("texto-desencriptar")[0].value = textoEncriptado;
}

function copiar() {
  document.getElementsByName("texto-desencriptar")[0].select();
  document.execCommand("copy");
}
