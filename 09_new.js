function Cat(color, name) {
    this.color = color
    this.name = name
}

// const cat = new Cat('black', 'KIT')
// console.log(cat)

// function myNew(constructor, ...args){ //Нативна реалізація ключового слова new
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }
//
// const cat = myNew (Cat, 'black', 'KIT')
// console.log(cat)

const cat = new Cat()
console.log(cat)