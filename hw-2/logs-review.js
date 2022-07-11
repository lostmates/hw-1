const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', 'hw-1', 'games.log')

let gamesWin = gamesLost = emptyLines = 0

fs.readFile(dir, 'utf8', (err, data) => {
    let lines = data.split('\n')
    let gamesPlayed = data.split('\n').length
    for(let lineNumber = 0; lineNumber<gamesPlayed; lineNumber++){
        if(lines[lineNumber][0] == 'W'){
            gamesWin++
        }else if(lines[lineNumber][0] == 'L'){
            gamesLost++
        }else{
            emptyLines++
        }
    }
    gamesPlayed -= emptyLines
    console.log(`Games played = ${gamesPlayed}`)
    console.log(`Games Win = ${gamesWin} Games Lost = ${gamesLost}`)
    console.log(`Winning score = ${gamesWin/gamesPlayed}`)
})