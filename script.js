/*MAPEAMENTO DAS TAGS, E CLASS*/
const convertButton = document.querySelector(".convert-button");
const valueShowedInput = document.querySelector(".value-showed-input");
const valueShowedOutput = document.querySelector(".value-showed-output");
const selectValue = document.querySelector(".select-value");
const flagcountry = document.querySelector(".eua");
const textValueOutput = document.querySelector(".text-value-output");
const inputValue = document.querySelector(".input-value").value;
/*COMEÇO DA FUNÇÃO DE CONVERSÃO*/
function convertValue() {
  const inputValue = document.querySelector(".input-value").value;
  const dolarToday = 5.71;
  const euroToday = 6.22;
  const libraToday = 7.3;
  valueShowedInput.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
  if (selectValue.value == "Dolar") {
    valueShowedOutput.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
    textValueOutput.innerHTML = "Dolar";
  }
  if (selectValue.value == "Euro") {
    valueShowedOutput.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
    textValueOutput.innerHTML = "Euro";
  }
  if (selectValue.value == "Libra") {
    valueShowedOutput.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / libraToday);
    textValueOutput.innerHTML = "Euro";
  }
}

/*INICIO DA FUNÇÃO TROCAR TEXTO E BANDEIRA*/
function changeflag() {
  if (selectValue.value == "Dolar") {
    flagcountry.src =
      "./assets/united-states-flag-round-icon-american-flag-png.webp";
    textValueOutput.innerHTML = "Dolar";
     valueShowedOutput.innerHTML = new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD",
     }).format(inputValue);
  }
  if (selectValue.value == "Euro") {
    flagcountry.src = "./assets/euro.png";
    textValueOutput.innerHTML = "Euro";
     valueShowedOutput.innerHTML = new Intl.NumberFormat("de-DE", {
       style: "currency",
       currency: "EUR",
     }).format(inputValue);
     
  }
  if (selectValue.value == "Libra") {
    flagcountry.src = "./assets/libra 1.png";
    textValueOutput.innerHTML = "Libra";
    valueShowedOutput.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
  }
}

/*ESCUTANDO O EVENTO QUE VAI ROLAR*/
convertButton.addEventListener("click", convertValue);
selectValue.addEventListener("change", changeflag);
