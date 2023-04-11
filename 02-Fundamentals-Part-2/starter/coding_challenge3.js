'use strict mode'

const person1 = {
    firstName : 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        return this.mass / this.height ** 2
    }
};


const person2 = {
    firstName : 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        return this.mass / this.height ** 2
    }
};

console.log(`${person1.firstName}'s BMI (${person1.calcBMI()}) is ${person2.calcBMI() > person1.calcBMI() ? 'higher' : 'lower'} than ${person2.firstName}'s (${person2.calcBMI()})`);