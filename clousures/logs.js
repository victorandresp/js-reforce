import { randomUUID } from 'node:crypto'

const generateLog = (uuid) => {
    const hash = uuid
    return (msg) =>{ 
        return console.log(`Log code: ${hash} msg: ${msg}`);
    }
}

console.log('randomUUID', randomUUID);
const frontendLog = generateLog(randomUUID())
frontendLog(`'this' is a reserved word`)
frontendLog(`'test' is undefined`)

const backendLog = generateLog(randomUUID())
backendLog('Timeout request')
backendLog('Error 500')