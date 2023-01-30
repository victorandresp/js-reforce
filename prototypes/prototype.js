// Constructor function
function Pokemon(name, gender){ 
 this.name = name
 this.gender = gender

 this.sound = function(){
    console.log(`${this.name} has emitted an sound!`);
}
}
// NOTE: this way for add an method to constructor function is better because saves memory in each instance of the object
Pokemon.prototype.greet = function() {
    console.log(`${this.name} is greeting you`);
}

const bulbasaur = new Pokemon("Bulbasaur", "Male")
const pachirisu = new Pokemon("Pachirisu", "Female")

console.log(bulbasaur);
console.log(pachirisu);
pachirisu.sound()
pachirisu.greet()