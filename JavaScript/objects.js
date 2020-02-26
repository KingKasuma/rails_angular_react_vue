let Animal = function(species, sound){
    this.species = species;
    this.sound = sound;
}

let Dog = new Animal('dog', 'bark')

console.log(Dog.species)

Animal.prototype.food = ''

Dog.food = 'Bones'

console.log(Dog.food);

Array.prototype.sum = function(){
    return 'This is how easy it is'
}

let arr = [1,2,3,4,5]

console.log(arr.sum())

//-----------------------------------------------

let Animal1 = {
    name: 'foo',
    sound: 'bar'
}

console.log(Animal1.name)


//----------------------------------------------
class Animal2{
    constructor(species, sound, food){
        this.species = species
        this.sound = sound
        this.food = food
    }

    speak(){
        return this.sound
    }
}

let Wolf = new Animal2('wolf', 'bark', 'bones')

console.log(Wolf.speak());

Wolf.bite = function(){
    console.log('bitten')
}

Wolf.bite()

//------------------------------------------------
let obj = {
    name: 'foo',
    printThis: function(){
        console.log(this);
    }    
}

obj.printThis();