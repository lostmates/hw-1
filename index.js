const http = require('http')
const readline = require('readline')

const myAPIKey = process.env.token
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Для выхода введите "exit()"')
console.log('Введите город, в котором хотите узнать погоду: ')
rl.on('line', (userInput, err) => {
    if(err) throw Error(err)
    if(userInput !== 'exit()'){
        const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${userInput}`

        http.get(url, (res) => {
            const {statusCode} = res
            if(statusCode !== 200){
                console.log(`StatusCode = ${statusCode}`)
                return
            }
    
            res.setEncoding('utf8')
            let rowData = ''
            res.on('data', (chunk) => {
                rowData += chunk
            })
            res.on('end', () => {
                let parseData = JSON.parse(rowData)
                console.log(parseData)
            })
        }).on('error', (err) => {
            if(err) console.error(err)
        })
    }else{
        rl.close()
    }
    
})

rl.on('close', (err) => {
    console.log('Попутного ветра!')
})