const iterable = [1,2,3,4,5]
const iterator = iterable[Symbol.iterator]()

console.log(iterator)

let next = iterator.next()

while(!next.done){
    console.log(next.value)
    next = iterator.next()
}