const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectDe = document.querySelector(".currency-select-de")



function convertvalues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // VALOR A CONVERTER VALOR EM REAL
    const currencyValueConvert = document.querySelector(".currency-value") // VALOR CONVERTIDO OUTRAS MOEDAS

    const dolarToday = 5.16
    const realToday = 1
    const euroToday = 5.60
    const bitcoinToday = 353.208
    const libraToday = 6.2
   

    if (currencySelectDe.value == "real") { // se o select estiver selecionado o valor de real, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)


    }
/*
    if (currencySelectDe.value == "dolar") { // se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectDe.value == "euro") { // se o select estiver selecionado o valor de euro, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelectDe.value == "libra") { // se o select estiver selecionado o valor de libra, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelectDe.value == "bitcoin") { // se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

*/


    if (currencySelect.value == "dolar") { // se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } 

    if (currencySelect.value == "real") { // se o select estiver selecionado o valor de real, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)

    } 

    

    if (currencySelect.value == "euro") { // se o select estiver selecionado o valor de euro", entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    } 


    if (currencySelect.value == "libra") { // se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    } 

    if (currencySelect.value == "bitcoin") { // se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    } 

   /*
        Alteração de valores

    }*/
    

    if (currencySelectDe.value == "real") { // se o select estiver selecionado o valor de real, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
  
    }
  
    if (currencySelectDe.value == "dolar") { // se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectDe.value == "euro") { // se o select estiver selecionado o valor de euro, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectDe.value == "libra") { // se o select estiver selecionado o valor de libra, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if (currencySelectDe.value == "bitcoin") { // se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    }

  
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
    }

    convertvalues()
}

function changeCurrencyDe() {
    const currencyNameDe = document.querySelector(".currency-de")
    const currencyImgDe = document.querySelector(".currency-img-de")

    if (currencySelectDe.value == "dolar") {
        currencyNameDe.innerHTML = "Dólar Americano"
        currencyImgDe.src = "./assets/Dolar.png"
    }

    if (currencySelectDe.value == "real") {
        currencyNameDe.innerHTML = "Real"
        currencyImgDe.src = "./assets/Real.png"
    }

    if (currencySelectDe.value == "euro") {
        currencyNameDe.innerHTML = "Euro"
        currencyImgDe.src = "./assets/Euro.png"
    }

    if (currencySelectDe.value == "libra") {
        currencyNameDe.innerHTML = "Libra"
        currencyImgDe.src = "./assets/Libra.png"
    }

    if (currencySelectDe.value == "bitcoin") {
        currencyNameDe.innerHTML = "Bitcoin"
        currencyImgDe.src = "./assets/Bitcoin.png"
    }


}

currencySelectDe.addEventListener("change", changeCurrencyDe)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertvalues)




