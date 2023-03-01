export const PI = Math.PI
export const hundred = 100

export const sayHello = () =>{
    console.log('arrow function');
}

export class Pokemon {
    constructor(){
        console.log('Constructor of Class');
    }
}

// NOTE: export default just only can export (1) unique value
// NOTE: export default cannot export "expressions" just declarations

export default function defaultFunction(){
    console.log('export default function')
}