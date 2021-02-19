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

}

function test() {
    console.log('test')
}

// currency functions
function usd() {
    let total

    switch (current.value == 1) {
        // USD to USD
        case output.value == 1:
            total = input.value * 1
            break
        // USD to EUR
        case output.value == 2:
            total = input.value * 0.83
            break
        // USD to JPY
        case output.value == 3:
            total = input.value * 105.70
            break
        // USD to GDP
        case output.value == 4:
            total = input.value * 0.72
            break
        // USD to AUD
        case output.value == 5:
            total = input.value * 1.29
            break
        // USD to CAD
        case output.value == 6:
            total = input.value * 1.27
            break
        // USD to CHF
        case output.value == 7:
            total = input.value * 0.09
        default:
            undefined
            break   
         }
    test()
    console.log(total)
    
}

function eur() {
    let total

    switch (current.value == 2) {
        // EUR to USD
        case output.value == 1:
            total = input.value * 1.21
            break
        // EUR to EUR
        case output.value == 2:
            total = input.value * 1
            break
        // EUR to JPY
        case output.value == 3:
            total = input.value * 127.79
            break
        // EUR to GDP
        case output.value == 4:
            total = input.value * 0.87
            break
        // EUR to AUD
        case output.value == 5:
            total = input.value * 1.56
            break
        // EUR to CAD
        case output.value == 6:
            total = input.value * 1.54
            break
        // EUR to CHF
        case output.value == 7:
            total = input.value * 1.08
        default:
            break
    }
    console.log(total)
}