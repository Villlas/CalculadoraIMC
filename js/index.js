const calcular = document.getElementById("calcular");

function main() {
  const altura = +document.getElementById("altura").value;
  const peso = +document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");
  if (altura !== "" && peso !== "") {
    const valorIMC = calcularIMC(altura, peso);

    let classificacao = "";
    classificacao = classificarIMC(valorIMC);

    resultado.textContent = "IMC: " + valorIMC + " | " + classificacao;
  } else {
    resultado.textContent = "Preencha todos os campos!!!";
  }
}

const calcularIMC = (altura, peso) => (valor = (peso / altura ** 2).toFixed(1));

const classificarIMC = (imc) => {
  let grau = "";
  if (imc < 18.5) grau = "Abaixo do peso.";
  else if (imc < 25) grau = "Peso Ideal";
  else if (imc < 30) grau = "Sobrepeso";
  else if (imc < 35) grau = "Obesidade grau I";
  else if (imc < 40) grau = "Obesidade grau II";
  else grau = "Obesidade mórbida";
  return grau;
};

calcular.addEventListener("click", main);
