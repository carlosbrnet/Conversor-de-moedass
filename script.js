/*MAPEANDO O BOTÃO*/
const novaIdentidadeDoButton = document.querySelector("button");
const selectDesaida = document.querySelector(".select");
const textoDolar = document.querySelector(".texto-dolar");
const bandeiraLogo = document.querySelector(".eua");

/*AGUARDANDO O EVENTO DE CLICK*/
novaIdentidadeDoButton.addEventListener("click", convertValue);

/*AQUI NA FUNÇÃO VAI O EVENTO*/
function convertValue() {
  const valorAconverter = document.querySelector(".valorDigitado").value;

  const exibicaoEntrada = document.querySelector(".valor-exibido-a-converter");
  const exibicaoSaida = document.querySelector(".valor-exibido-convertido");

  const dolarToday = 5.2;

  exibicaoEntrada.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorAconverter);

  exibicaoSaida.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(valorAconverter / dolarToday);
}

selectDesaida.addEventListener("change", mudarBandeira);

function mudarBandeira() {
  if (selectDesaida.value == "Euro") {
    textoDolar.innerHTML = "Euro";
    bandeiraLogo.src = "./assets/euro.png";
  }
  if (selectDesaida.value == "Dolar") {
    textoDolar.innerHTML = "Dolar";
    bandeiraLogo.src =
      "./assets/united-states-flag-round-icon-american-flag-png.webp";
  }
}
