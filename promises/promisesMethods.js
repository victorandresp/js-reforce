// Promise.all
const promiseToAllFirst = new Promise((resolve)=>{
    setTimeout(() => resolve('First promise all'), 500)
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
