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

function converter() {
     usd()
}

// Currency Functions
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
            break
    }
    console.log(total)
}