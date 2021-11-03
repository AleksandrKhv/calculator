let buttonPlus = document.getElementById('buttonPlus')
let buttonMinus = document.getElementById('buttonMinus')
let buttonMultiply = document.getElementById('buttonMultiply')
let buttonDivide = document.getElementById('buttonDivide')

let input1 = document.getElementById('number1')
let input2 = document.getElementById('number2')

function allOperations(operationCode) {
    let number1 = Number(input1.value)
    let number2 = Number(input2.value)

    if (operationCode === '+') {
        let result = number1 + number2;
        window.alert(result)
    } else if (operationCode === '-') {
        let result = number1 - number2;
        window.alert(result)
    } else if (operationCode === '*') {
        let result = number1 * number2;
        window.alert(result)
    } else if (operationCode === '/') {
        let result = number1 / number2;
        window.alert(result)
    }
}

function allButtonOperationClick(eventObject) {
    let clickedElement = eventObject.currentTarget
    let operation = clickedElement.innerHTML
    allOperations(operation)
}

let operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', allButtonOperationClick)
}
