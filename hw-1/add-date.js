#!/usr/bin/env node

const current = require('./get-current-date.js')

const currentDate = current.Current()

currentDate[0] = Number(currentDate[0])
currentDate[1] = Number(currentDate[1])
currentDate[0] += currentDate[1]
while(currentDate[2] === 'm' && currentDate[0] > 11){
    currentDate[0] -= 12
}while(currentDate[2] === 'd' && currentDate[0] > 30){
    currentDate[0] -= 31
}
console.log(currentDate[0])
