//__proto__
//Object.getPrototypeOf()

// function Cat(name, color) {
//     this.name= name
//     this.color = color
// }
//
// Cat.prototype.voice = function(){
//     console.log(`Cat ${this.name} says mjauu`)
// }
//
// const cat = new Cat('Kit', 'white')
// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)
//cat.voice()

// ========
function Person () {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Roman'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

//Щоб дізнатись які властивості є у обєкті а які в прототипі
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

// Object.create ()
const proto = {year: 2021}
const myYear = Object.create(proto)

console.log(myYear.year)

proto.year = 2200

console.log(myYear.year)

// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)