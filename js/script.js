const valueButtons = document.querySelectorAll(".value")
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const output = document.querySelector('.calc-text')
const evaluateThis = [];
const buttonNumbers = {
    zero: 0,
    three: 3,
    two: 2,
    one:1,
    six: 6,
    five: 5,
    four: 4,
    nine: 9,
    eight: 8,
    seven: 7,
    float: '.'
}
const buttonOperators = {
    divide: '/',
    subtract: '-',
    add: '+', 
    multiply: '*',
}
let currentValue = ''
equalButton.addEventListener('click', () =>{
    evaluateThis.push(currentValue)
    currentValue = ''
    evaluation();
})
operatorButtons.forEach(item =>{
    item.addEventListener('click', () => {
        let property = item.id
        evaluateThis.push(currentValue)
        evaluateThis.push(buttonOperators[property])
        currentValue = '';
    })
})
valueButtons.forEach(item =>{
        item.addEventListener('click', () => {
            let property = item.id
            currentValue += buttonNumbers[property]
            output.textContent = currentValue
        })
    })
function evaluation () {
    while (evaluateThis.includes('*') || evaluateThis.includes('/') ){
        let op1 = evaluateThis.indexOf('*')
        let op2 = evaluateThis.indexOf('/')
        console.log(op1)
        console.log(op2)
        console.log('I ran')
        if (op1!=-1&&op2==-1) {
            console.log('Hello')
            mathPath.multiply(op1)
        }
    }
}

const mathPath = {
    multiply: function(op1) {
        temp = evaluateThis[op1-1] * evaluateThis [op1+1]
        console.log('I ran to')
        for (let i =0; i <3; i ++){
            evaluateThis.splice(op1-1)
        }
        output.textContent = temp
    }
}