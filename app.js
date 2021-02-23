                // Selectors //
// buttons
const clearBtn = document.getElementById('clear--btn')
const convertBtn = document.getElementById('convert--btn')

// input/select selector
const input = document.getElementById('amount')
const current = document.getElementById('current--select')
const output = document.getElementById('output--select')

// converted values array and array length
let convertedValues = []
let convertedTotal = convertedValues.length

// display selectors
const currentDisplay = document.querySelector('.top__current')
const outputDisplay = document.querySelector('.top__output')

                // Events //
// convert btn event
convertBtn.addEventListener('click', converter)
// convert press enter event
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {converter()}
})
// clear btn event
clearBtn.addEventListener('click', () => {
    input.value = ''
})

                // Functions //
// event function
function converter() {
    // USD convert function
    usd()
    // EUR convert function
    eur()
    // JPY convert function
    jpy()
    //GBP convert function
    gbp()
    // AUD convert function
    aud()
    // CAD convert function
    cad()
    // CHF convert function
    chf()
    // update display function
    updateDisplay()
}
// will update current and output displays
function updateDisplay() {
    outputDisplay.innerText = convertedValues[convertedValues.length - 1]
    currentDisplay.innerText = input.value
}

// currency functions

// us dollar
function usd() {
    let total, sum 
    if(current.value != 1) {return undefined}
    if (current.value == 1 && output.value == 1) {total = input.value * 1} 
    if (current.value == 1 && output.value == 2) {total = input.value * 0.83} 
    if (current.value == 1 && output.value == 3) {total = input.value * 104.99} 
    if (current.value == 1 && output.value == 4) {total = input.value * 0.72} 
    if (current.value == 1 && output.value == 5) {total = input.value * 1.29} 
    if (current.value == 1 && output.value == 6) {total = input.value * 1.26} 
    if (current.value == 1 && output.value == 7) {total = input.value * 0.89} 
    convertedValues.push(Math.round(total * 10) / 10)
}

//  european euro
function eur() {
    let total
    if (current.value != 2) {return undefined}
    if (current.value == 2 && output.value == 1) {total = input.value * 1.21} 
    if (current.value == 2 && output.value == 2) {total = input.value * 1} 
    if (current.value == 2 && output.value == 3) {total = input.value * 127.24} 
    if (current.value == 2 && output.value == 4) {total = input.value * 0.87} 
    if (current.value == 2 && output.value == 5) {total = input.value * 1.56} 
    if (current.value == 2 && output.value == 6) {total = input.value * 1.56} 
    if (current.value == 2 && output.value == 7) {total = input.value * 1.08}
    convertedValues.push(Math.round(total * 10) / 10)
}

// japanese yen
function jpy() {
    let total
    if (current.value != 3) {return undefined}
    if (current.value == 3 && output.value == 1) {total = input.value * 0.0095} 
    if (current.value == 3 && output.value == 2) {total = input.value * 0.0079} 
    if (current.value == 3 && output.value == 3) {total = input.value * 1} 
    if (current.value == 3 && output.value == 4) {total = input.value * 0.0069} 
    if (current.value == 3 && output.value == 5) {total = input.value * 0.012} 
    if (current.value == 3 && output.value == 6) {total = input.value * 0.012} 
    if (current.value == 3 && output.value == 7) {total = input.value * 0.0085}
    convertedValues.push(Math.round(total * 10) / 10)
}

// british pound
function gbp() {
    let total
    if (current.value != 4) {return undefined}
    if (current.value == 4 && output.value == 1) {total = input.value * 1.39} 
    if (current.value == 4 && output.value == 2) {total = input.value * 1.14} 
    if (current.value == 4 && output.value == 3) {total = input.value * 145.4} 
    if (current.value == 4 && output.value == 4) {total = input.value * 1} 
    if (current.value == 4 && output.value == 5) {total = input.value * 1.79} 
    if (current.value == 4 && output.value == 6) {total = input.value * 1.76} 
    if (current.value == 4 && output.value == 7) {total = input.value * 1.24}
    convertedValues.push(Math.round(total * 10) / 10)
}

// austrialian dollar
function aud() {
    let total
    if (current.value != 5) {return undefined}
    if (current.value == 5 && output.value == 1) {total = input.value * 0.78} 
    if (current.value == 5 && output.value == 2) {total = input.value * 0.64} 
    if (current.value == 5 && output.value == 3) {total = input.value * 81.47} 
    if (current.value == 5 && output.value == 4) {total = input.value * 0.56} 
    if (current.value == 5 && output.value == 5) {total = input.value * 1} 
    if (current.value == 5 && output.value == 6) {total = input.value * 0.98} 
    if (current.value == 5 && output.value == 7) {total = input.value * 1.02}
    convertedValues.push(Math.round(total * 10) / 10)
}

// canadian dollar
function cad() {
    let total
    if (current.value != 6) {return undefined}
    if (current.value == 6 && output.value == 1) {total = input.value * 0.79} 
    if (current.value == 6 && output.value == 2) {total = input.value * 0.65} 
    if (current.value == 6 && output.value == 3) {total = input.value * 82.77} 
    if (current.value == 6 && output.value == 4) {total = input.value * 0.57} 
    if (current.value == 6 && output.value == 5) {total = input.value * 1.02} 
    if (current.value == 6 && output.value == 6) {total = input.value * 1} 
    if (current.value == 6 && output.value == 7) {total = input.value * 0.7}
    convertedValues.push(Math.round(total * 10) / 10)
}

// swiss franc
function chf() {
    let total
    if (current.value != 7) {return undefined}
    if (current.value == 7 && output.value == 1) {total = input.value * 1.12} 
    if (current.value == 7 && output.value == 2) {total = input.value * 0.93} 
    if (current.value == 7 && output.value == 3) {total = input.value * 117.73} 
    if (current.value == 7 && output.value == 4) {total = input.value * 0.81} 
    if (current.value == 7 && output.value == 5) {total = input.value * 1.44} 
    if (current.value == 7 && output.value == 6) {total = input.value * 1.42} 
    if (current.value == 7 && output.value == 7) {total = input.value * 1}
    convertedValues.push(Math.round(total * 10) / 10)
}