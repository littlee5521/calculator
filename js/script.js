const allButtons = document.querySelectorAll(".calc-button")
const output = document.querySelector('.calc-text')
const buttonOpperatos = {
    float: ".",
    add: '+',
    equal: '=',
    zero: '0',
    three: '3',
    two: '2',
    one:'1',
    subtract: '-',
    six: '6',
    five: '5',
    four: '4',
    multiply: '*',
    nine: '9',
    eight: '8',
    seven: '7',
    divide: '/'
}
let evaluateThis = ''
allButtons.forEach(item =>{
    if(item.id=="equal" || item.id =='clear') {
        console.log('Hello')
    }
    else {
        item.addEventListener('click', () => {
            let property = item.id
            evaluateThis += buttonOpperatos[property]
            console.log(evaluateThis)
            output.textContent = evaluateThis
        })
    }
} )
let hi = '27'
let bye = '28'
console.log(+hi+ +bye)