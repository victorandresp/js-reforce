/* #Regex for CI Venezuelan
Explanation of each chararcter in REGEX:

 ^     -> The initial is mandatory for the pattern
 ()    -> Represents an group of characters
 [VE]  -> If not specify a range the expression assume that 1 caracter noted inside the brackets is mandatory
 \d    -> Represents the Set: [0-9]
 {1,8} -> Is a range min and max of characters accepted
 $     -> The end is mandatory for the pattern
 i     -> Is a flag what accepts upper and lower case
*/

const verifyCI = (CI)=> {
    const regex = /^([VE]-)?\d{1,8}$/i
    const validTextCI = regex.test(CI) ? 'valid' : 'not valid'
    return console.log(`${CI} is a ${validTextCI} CI`)
}

verifyCI('V-12345689')
verifyCI('E-12345689')
verifyCI('-12345689')
verifyCI('VE-12345689')
verifyCI('12345689')
verifyCI('V-123456892')
verifyCI('V-123456892B')
verifyCI('V-1234V6892')