// function Person(name, email, phone) {
//   this.name = name;
//   this.email = email;
//   this.phone = phone;
// }
    
// Person.prototype.greet = function(other) {
//   console.log('Hello ' + other.name + ', I am ' + this.name + '!');
// };

// const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

// const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// sonny.greet(jordan)
// jordan.greet(sonny)

// console.log(`Sonny contact info: email: ${sonny.email} phone: ${sonny.phone}`)

// console.log(`Jordan contact info: email: ${jordan.email} phone: ${jordan.phone}`)

class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  greet(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  }
} 

const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan)
jordan.greet(sonny)

console.log(`Sonny contact info: email: ${sonny.email} phone: ${sonny.phone}`)

console.log(`Jordan contact info: email: ${jordan.email} phone: ${jordan.phone}`)