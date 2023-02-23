class Pokemon {
    constructor(name, gender){
        this.name = name
        this.gender = gender
        this.type = undefined
    }
    sound(){
        console.log(`${this.name} has emitted an sound!`);
    }
    greet(){
        console.log(`${this.name} is greeting you`);
    }
    static info(){ // Static methods are functions that are part of a class and can be called without making an instance.
        console.log("Pokémon are creatures of all shapes and sizes that live either in the wild or alongside humans, they are non-real characters created by nintendo in their own universe.");
    }
    get getType(){
        return this.type
    }
    set setType(type){
        this.type = type
    }
}

Pokemon.info() // Call static method

const bulbasaur = new Pokemon("Bulbasaur", "Male")
const pachirisu = new Pokemon("Pachirisu", "Female")

console.log(bulbasaur);
console.log(pachirisu);

pachirisu.sound()
pachirisu.greet()

// use getters and setters
// NOTE: the use of getters and setters can be a bit strange because they should be treated as attributes(expressions) and not as methods. 
pachirisu.setType = 'electric'
console.log("Type:", pachirisu.getType);

// Inheritance 
class PokemonShiny extends Pokemon{
    constructor(name, gender, color){
        super(name, gender) // NOTE: super() is exactly the same as calling the constructor of the parent class
        this.color = color
    }
    sound(){
        console.log(`${this.name} has emitted an greeting with a shiny aura ${this.color}!`);
    }
}

const shinyArcanine = new PokemonShiny("Arcanine", "Male", "Golden")

console.log(shinyArcanine);
shinyArcanine.sound()