class Animal{
    constructor(name, sound, food){
        this.sound = sound
        this.name = name
        this.food = food
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super(name, sound)
    }
}

class Cat extends Animal{
    constructor(name, sound, food){
        super(name, sound, food)
    }
}

let dog = new Dog('spot', 'woof')

console.log(dog.sound)

let cat = new Cat('Socls', 'meow', 'tuna')

console.log(cat.food)

//-------------------------------------------------------
class Box{
    constructor(side){
        this.side = side;
    }

    volume(){        
        return `The volume is ${ Math.pow(this.side, 3)}`
    }    

    area(){
        return `The area is ${Math.pow(this.side, 2)}`
    }
}

let newBox = new Box(5)

console.log(newBox.volume());
console.log(newBox.area());