const fs = require('fs')
const path = require('path')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const minimum = 0
const maximum = 1
const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

const logFile = path.join(__dirname, 'games.log')

console.log(`Угадай ${minimum} или ${maximum}`)
rl.on('line', (userInput) => {
    if(userInput.trim() == randomNumber){
        console.log('Win!')
        fs.appendFile(logFile, `Win! Player=${userInput.trim()} Number=${randomNumber}\n`, (err) => {
            if(err) throw Error(err)
        })
        rl.close()
    }else{
        console.log('Lose :(')
        fs.appendFile(logFile, `Lose :( Player=${userInput.trim()} Number=${randomNumber}\n\n`, (err) => {
            if(err) throw Error(err)
        })
        rl.close()
    }
})


module.exports = {logFile: logFile}