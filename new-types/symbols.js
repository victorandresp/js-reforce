// Correct way for declare a Symbol

const ID = Symbol()

const anyObject = {
    [ID]: '1'
}

anyObject.ID = 'trying overwrite...'

console.log(anyObject.ID);
console.log(anyObject[ID]);

// How know symbols 
const symbolsProps = Object.getOwnPropertySymbols(anyObject)

console.log('symbolsProps', symbolsProps);