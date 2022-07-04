const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const startBound = 0
const endBound = 100

let number = Math.floor(Math.random() * (endBound - startBound + 1)) + startBound;

console.log(`Загадано число в диапазоне от ${startBound} до ${endBound}`)
        rl.on('line', (userInput) => {
            if(userInput.trim() == number){
                rl.close()
            }else if(number > userInput.trim()){
                rl.setPrompt('Больше\n')
                rl.prompt()
            }else if(number < userInput.trim()){
                rl.setPrompt('Меньше\n')
                rl.prompt()
            }else{
                rl.setPrompt('Некорректные данные\n')
                rl.prompt()
            }
        })


rl.on('close', () => {
    console.log(`Отгадано число ${number}`)
})

