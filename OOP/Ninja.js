// Assignment details
// Create a Ninja class
// add an attribute: name
// add an attribute: health
// add a attribute: speed - give a default value of 3
// add a attribute: strength - give a default value of 3
// add a method: sayName() - This should log that Ninja's name to the console
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// add a method: drinkSake() - This should add +10 Health to the Ninja
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// create a method: drinkSake()

class Ninja {
    constructor (name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        this.name;
        console.log(`Your name is ${this.name}`);
    }

    showStats() {
        this.health;
        this.speed;
        this.strength;
        console.log(`Name: ${this.name}, your health points are ${this.health}, your speed is ${this.speed}, your strength is ${this.strength}`)
    }

    drinkSake() {
        this.health +=10;
        console.log(`Your health points have been increased by 10 your total health is now ${this.health}.`)
    }
}

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health)
        this.speed = 10;
        this.strength = 10;
        this.Wisdom = 10;
    }


    speakWisdom() {
        this.drinkSake();
        console.log("Messages are wise but messages can be daunting!")
    }
}

// const ninja1 = new Ninja("Michael the Ninja", 100)
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

const sensei1 = new Sensei ("Rachel the Sensei", 50)
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();
