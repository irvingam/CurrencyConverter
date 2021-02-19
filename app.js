                // Selectors //
// buttons
const clearBtn = document.getElementById('clear--btn')
const convertBtn = document.getElementById('convert--btn')

// input/select selector
const input = document.getElementById('amount')
const current = document.getElementById('current--select')
const output = document.getElementById('output--select')

                // Events //
// convert btn event
convertBtn.addEventListener('click', converter)
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

}

function test() {
    console.log('test')
}

// currency functions


function usd() {
    let total
    if(current.value != 1) {return undefined}
    if (current.value == 1 && output.value == 1) {total = input.value * 1} 
    if (current.value == 1 && output.value == 2) {total = input.value * 0.83} 
    if (current.value == 1 && output.value == 3) {total = input.value * 104.99} 
    if (current.value == 1 && output.value == 4) {total = input.value * 0.72} 
    if (current.value == 1 && output.value == 5) {total = input.value * 1.29} 
    if (current.value == 1 && output.value == 6) {total = input.value * 1.26} 
    if (current.value == 1 && output.value == 7) {total = input.value * 0.89} 
    console.log(total)
    
}

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
    console.log(total)
}

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
    console.log(total)
}