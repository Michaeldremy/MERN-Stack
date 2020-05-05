const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// logs 'Tesla' and 'Mercedes'


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Error: line 18 name is not defined.


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
// //Predict the output
console.log(password);
console.log(hashedPassword);

// log '12345' but then it would throw an error saying undefined for hashedPassword


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
2
const [,first] = numbers;
5
const [,,,second] = numbers;
2
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// log's false and true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
// skipping secondKey[0] and printing 5 at index secondKey[1]
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// logs 'value', [1, 5, 1, 8, 3, 3], [1] and [5]