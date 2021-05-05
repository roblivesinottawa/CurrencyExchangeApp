const currencyOne = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amountTwo = document.getElementById('amount-two')

const rate = document.getElementById('rate')
const swap = document.getElementById('swap')

// fetch the exchange rates and update the DOM
const calculate = () => {
    const currency_one = currencyOne.value
    const currency_two = currencyOne.value

    fetch(` https://v6.exchangerate-api.com/v6/47e2759a11ab93cc4a9e632e/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two]
            rate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            amountTwo.value = (amountOne.value * rate).toFixed(2)
        })
}

// adding the event listeners
currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo = temp
    calculate()
})

calculate()