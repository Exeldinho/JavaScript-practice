// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log(`Ти ${what} знаєш, ${name} ${this.surname}`)
//     }
// }
//
// const John = { surname: 'Сноу'}
//
// person.knows('все', 'Бран')
// person.knows.call(John, 'нічого не', 'Джон')
// person.knows.apply(John, ['нічого не', 'Джон'])
// person.knows.call(John, ...['нічого не', 'Джон'])
// person.knows.bind(John, 'нічого не', 'Джон')()
// const bound = person.knows.bind(John, 'нічого не', 'Джон')
// bound ()

//==========
// function Person(name, age){
//     this.name = name
//     this.age = age
//     console.log(this)
// }

//const elena = new Person('Elena', 20)

// ======== Явний контекст
// function logThis(){
//     console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// ======== Не явний контекст
// const animal = {
//     legs: 4,
//     logThis: function(){
//         console.log(this)
//     }
// }
//
// animal.logThis()

function Cat(color) { //концепт iife
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this) ) ()
}

new Cat ('red')