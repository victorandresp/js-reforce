 const mySet = new Set([1,2,3,3,3,4,5,"Hola", "hola", true, true, false, {}, {}])
 
 console.log('mySet', mySet);
 console.log('size', mySet.size);

 mySet.add(2)
 mySet.delete("hola")
 console.log('exists in set "hola"?', mySet.has("hola"));

 // NOTE: we can iterate a set with a for of loop o an .forEach only...

console.log(Array.from(mySet)[8]) // Way for access to a specific position on Set

mySet.clear()
console.log(mySet);
