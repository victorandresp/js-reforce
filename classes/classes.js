class Pokemon {
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }
    sound(){
        console.log(`${this.name} has emitted an sound!`);
    }
    greet(){
        console.log(`${this.name} is greeting you`);
    }
}

const bulbasaur = new Pokemon("Bulbasaur", "Male")
const pachirisu = new Pokemon("Pachirisu", "Female")

console.log(bulbasaur);
console.log(pachirisu);
pachirisu.sound()
pachirisu.greet()

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