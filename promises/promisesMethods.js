// Promise.all
const promiseToAllFirst = new Promise((resolve)=>{
    setTimeout(() => resolve('First promise all'), 300)
})

const promiseToAllSecond = new Promise((resolve)=>{
    setTimeout(() => resolve('Second promise all'), 500)
})
const promiseToAllFailed = new Promise((_, reject)=>{
    setTimeout(() => reject('FAILED THIRD PROMISE ALL'), 500)
}).catch(err => new Error(err))

Promise.all([promiseToAllFirst, promiseToAllSecond, promiseToAllFailed])  
    .then(res => {
        console.log('THEN Promise.All', res)
        console.log(res[2].message) // How shows the error message if we are catchin
    })
    .catch(err => console.log(err))

// Promise.allSettled

Promise.allSettled([promiseToAllFirst, promiseToAllSecond, promiseToAllFailed])  
    .then(res => {
        console.log('THEN', res)
    })
// Promise.race
const snail = new Promise((resolve)=>{
    setTimeout(() => resolve('Snail'), 500)
})

const cat = new Promise((resolve)=>{
    setTimeout(() => resolve('Cat'), 500)
})

const leopard = new Promise((resolve)=>{
    setTimeout(() => resolve('Leopard'), 100)
})
const rejectRace = new Promise((_, reject)=>{
    setTimeout(() => reject('REJECTED RACE'), 200)
})

Promise.race([snail, cat, leopard, rejectRace])  // NOTE: if we pass a null value to race, it never complete the PROMISE
    .then(fastest => console.log(fastest))

