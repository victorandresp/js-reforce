const totodile = {
    name: 'Totodile',
    type: "Water",
    lvl: 10,
}

const totodileProxie = new Proxy(totodile, {
    get: (target, prop) => {
        if(typeof target[prop] === 'string')
            return target[prop].toUpperCase()
        return target[prop]
        
    },
    set: (target, prop, value) => {
        if(prop === 'lvl' && typeof(value) !== 'number'){
            console.error('The prop lvl must be a number')
            return true // NOTE: Because of the way the Proxy object is structured inside, the set method must always return a 'truthy' value otherwise it generates a TypeError
        }
        return target[prop] = value
    }
})

totodileProxie.lvl = ++totodileProxie.lvl
console.log(totodileProxie.lvl);
console.log(totodileProxie.name);
console.log(totodileProxie);