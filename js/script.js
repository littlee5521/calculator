const valueButtons = document.querySelectorAll(".value")

const operatorButtons = document.querySelectorAll('.operator')

const equalButton = document.querySelector('.equal')

const clearButton = document.querySelector('.clear')

const output = document.querySelector('.calc-text')

let goAhead =0;

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

/* button functions */

clearButton.addEventListener('click', () => {
    currentValue = ''
    while (evaluateThis.length>0){
        evaluateThis.splice(0,1)
    }
    output.textContent = '0'
    goAhead = 0
    console.log(evaluateThis)
})

equalButton.addEventListener('click', () =>{
    evaluateThis.push(currentValue)
    currentValue = ''
    evaluation();
})

operatorButtons.forEach(item =>{
    item.addEventListener('click', () => {
        let property = item.id
        if(goAhead!=1){
            evaluateThis.push(currentValue)
        }
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

/* Functions */

function evaluation () {
    while (evaluateThis.includes('*') || evaluateThis.includes('/') ){
        let op1 = evaluateThis.indexOf('*')
        let op2 = evaluateThis.indexOf('/')
        if (op1>op2) {
            mathPath.multiply(op1)
        }
        if(op1<op2){
            mathPath.divide(op2)
        }
    }
    while (evaluateThis.includes('+') || evaluateThis.includes('-') ) {
        let op1 = evaluateThis.indexOf('+')
        let op2 = evaluateThis.indexOf('-')
        if (op1>op2) {
            mathPath.add(op1)
        }
        if(op1<op2){
            mathPath.subtract(op2)
        }
    }
}

const mathPath = {
    multiply: function(op1) {
        temp = evaluateThis[op1-1] * evaluateThis [op1+1]
        for (let i =0; i <3; i ++){
            evaluateThis.splice(op1-1,1)
        }
        temp = temp.toString()
        evaluateThis.splice(op1-1,0, temp)
        output.textContent = temp
        goAhead=1
    },
    divide: function(op2) {
        temp = evaluateThis[op2-1] / evaluateThis [op2+1]
        for (let i =0; i <3; i ++){
            evaluateThis.splice(op2-1,1)
        }
        temp = temp.toString()
        evaluateThis.splice(op2,0, temp)
        output.textContent = temp
        goAhead=1
    },
    add: function(op1){
        temp = +evaluateThis[op1-1] + +evaluateThis [op1+1]
        for (let i =0; i <3; i ++){
            evaluateThis.splice(op1-1,1)
        }
        temp = temp.toString()
        evaluateThis.splice(op1-1,0, temp)
        output.textContent = temp
        goAhead=1
    },
    subtract: function(op2){
        temp = evaluateThis[op2-1] - evaluateThis [op2+1]
        for (let i =0; i <3; i ++){
            evaluateThis.splice(op2-1,1)
        }
        temp = temp.toString()
        evaluateThis.splice(op2,0, temp)
        output.textContent = temp
        goAhead=1
    }
}