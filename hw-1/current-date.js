#!/usr/bin/env node
const current = require('./get-current-date.js')
const currentDate = current.Current()

console.log(currentDate[0])

