const convertButton = document.querySelector(".convert-button")
const currencySelectTo = document.querySelector(".currency-select-down")
const currencySelectFrom = document.querySelector(".currency-select-up")

const imgFrom = document.querySelector(".currency-img-from")
const imgTo = document.querySelector(".currency-img-to")

const nameFrom = document.getElementById("currency-name-from")
const nameTo = document.getElementById("currency-name-to")

const rates = {
    "USD": 5.05,
    "EUR": 5.45,
    "GBP": 6.35,
    "JPY": 0.033,
    "BRL": 1
}

const currencyInfo = {
    USD: {
        name: "Dólar Americano",
        img: "./assets/bandeira-eua.png"
    },
    EUR: {
        name: "Euro",
        img: "./assets/Euro.png"
    },
    GBP: {
        name: "Libra Esterlina",
        img: "./assets/libra.png"
    },
    JPY: {
        name: "Iene Japonês",
        img: "./assets/iene.png"
    },
    BRL: {
        name: "Real Brasileiro",
        img: "./assets/bandeira-brasil.png"
    }
}

function convertCurrency(value, from, to) {
    let valueInBRL

    if (from === "BRL") {
        valueInBRL = value
    } else {
        valueInBRL = value * rates[from]
    }

    if (to === "BRL") {
        return valueInBRL
    } else {
        return valueInBRL / rates[to]
    }
}

function formatCurrency(value, currency) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency
    }).format(value)
}

function handleConvert() {
    const inputValue = Number(document.querySelector(".input-currency").value)

    const fromCurrency = currencySelectFrom.value
    const toCurrency = currencySelectTo.value

    const converted = convertCurrency(inputValue, fromCurrency, toCurrency)

    document.querySelector(".currency-value-to-convert").innerHTML =
        formatCurrency(inputValue, fromCurrency)

    document.querySelector(".currency-value").innerHTML =
        formatCurrency(converted, toCurrency)
}

function updateCurrencyUI() {
    const from = currencySelectFrom.value
    const to = currencySelectTo.value

    // origem
    imgFrom.src = currencyInfo[from].img
    nameFrom.innerHTML = currencyInfo[from].name

    // destino
    imgTo.src = currencyInfo[to].img
    nameTo.innerHTML = currencyInfo[to].name
}

currencySelectFrom.addEventListener("change", () => {
    updateCurrencyUI()
    handleConvert()
})

currencySelectTo.addEventListener("change", () => {
    updateCurrencyUI()
    handleConvert()
})



convertButton.addEventListener("click", handleConvert)
currencySelectTo.addEventListener("change", handleConvert)
currencySelectFrom.addEventListener("change", handleConvert)