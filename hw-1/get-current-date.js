#!/usr/bin/env node 

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


function Current(){
    const argv = yargs(hideBin(process.argv)).argv

    let currentTime = new Date()
    let currentDate
    let flag
    
    if(argv['year'] || argv['y']){
        currentDate = currentTime.getFullYear()
        flag = 'y'
    }else if(argv['month'] || argv['m']){
        currentDate = currentTime.getMonth()
        flag = 'm'
    }else if(argv['date'] || argv['d']){
        currentDate = currentTime.getDate()
        flag = 'd'
    }else{
        currentDate = currentTime
    }
    let value
    
    if(parseInt(argv['y'])){
        value = argv['y']
    }else if(parseInt(argv['year'])){
        value = argv['year']
    }else if(parseInt(argv['m'])){
        value = argv['m']
    }else if(parseInt(argv['month'])){
        value = argv['month']
    }else if(parseInt(argv['d'])){
        value = argv['d']
    }else if(parseInt(argv['date'])){
        value = argv['date']
    }else if(parseInt(argv['_'])){
        value = argv['_'][0]
    }
    
    return [currentDate, value, flag]
}

module.exports = {Current}