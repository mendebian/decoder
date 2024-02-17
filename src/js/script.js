function showResult() {
  const resultTemp = document.getElementById('resultTemp');
  const resultBody = document.getElementById('resultBody');

  if (resultBody.style.display === "none") {
    resultTemp.style.display = "none";
    resultBody.style.display = "block";
  }
}
  
function encryptClick() {
  let inputText = document.getElementById("inputText").value;
  let encryptedText = "";

  for (let i = 0; i < inputText.length; i++) {
    switch (inputText[i]) {
      case 'e':
        encryptedText += "enter";
        break;
      case 'i':
        encryptedText += "imes";
        break;
      case 'a':
        encryptedText += "ai";
        break;
      case 'o':
        encryptedText += "ober";
        break;
      case 'u':
        encryptedText += "ufat";
        break;
      default:
        encryptedText += inputText[i];
    }
  }
  
  document.getElementById("outputText").innerText = encryptedText;
  showResult();
}

function decryptClick() {
  let inputText = document.getElementById("inputText").value;

  inputText = inputText.replace(/enter/g, 'e'); 
  inputText = inputText.replace(/imes/g, 'i');
  inputText = inputText.replace(/ai/g, 'a');
  inputText = inputText.replace(/ober/g, 'o');
  inputText = inputText.replace(/ufat/g, 'u');

  document.getElementById("outputText").innerText = inputText;
  showResult();  
}

var copyResult = document.getElementById("outputText");

copyResult.addEventListener("click", function() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copyResult.textContent)
        .then(() => alert("Resultado copiado para a área de transferência"))
        .catch((err) => console.error("Falha ao copiar texto: ", err));
  } else {
    alertert("A função de copiar não é suportada neste navegador");
  }
});