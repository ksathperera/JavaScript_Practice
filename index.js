  //This is my first JavaScript code
  console.log('Hello World');

  //variables
  let name = 'Kavindi';
  console.log(name);
  
  //constants In constants when we use let keyword we cannot change the value of a variable.Since it is a constant
  const interestRate = 0.3;
  console.log(interestRate);

  //primitives
  let name2 = 'Kavindi';
  let age = 23;
  let isApproved = false;
  let firstName = undefined;
  let selectedColor = null;

  console.log(name2);
  console.log(age);
  console.log(isApproved);
  console.log(firstName);
  console.log(selectedColor);

//objects
let person = {
    name3 : 'Nuwa',
    age : 30
};

console.log(person);

//change objects values using Dot Notation
person.name3 = 'Kasun';

console.log(person.name3);

//change objects values using Bracket Notation
person['name3'] = 'Tharaka';

console.log(person.name3);

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);

//Functions
function greet (name4,lastName) {
    console.log('Yo' + name4  +'' + lastName);
}
//function call
greet('Nuwa',' Kasthuri');
greet('Kasun ');

//calculating a value
function square(number){
    return number*number;
}
console.log(square(5));