const criptografia = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function criptografarTexto(texto) {
  let textoOriginal = document.querySelector("input").value;
  console.log(textoOriginal);

  let textoCriptografado = textoOriginal
    .toLowerCase()
    .split("")
    .map((letra) => criptografia[letra] || letra)
    .join("");

  console.log(`Texto criptografado: ${textoCriptografado}`);
  exibirTextoNaTela("h2", "Vamos criar um Enigma");
  exibirTextoNaTela(
    "p#resultado",
    `Texto criptografado: ${textoCriptografado}`
  );
}

function descriptografarTexto() {
  let textoOriginal = document.querySelector("input").value;

  for (const letra in criptografia) {
    const regex = new RegExp(criptografia[letra], "g");
    textoOriginal = textoOriginal.replace(regex, letra);
  }

  console.log("Texto descriptografado:", textoOriginal);
  exibirTextoNaTela("h2", "Vamos  desvendar o Enigma");
  exibirTextoNaTela("p#resultado", `Texto descriptografado: ${textoOriginal}`);
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function copiarTexto() {
  const textoParaCopiar = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(textoParaCopiar);
}
