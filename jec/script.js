console.log("** JavaScript's Edge Cases **")

console.log("1. Object prototype")

const objectWithObjectPrototype = {}
objectWithObjectPrototype.a = "a"
objectWithObjectPrototype.b = "b"

console.log(objectWithObjectPrototype)
console.log(objectWithObjectPrototype.toString)

const objectWithNullPrototype = Object.create(null)
objectWithNullPrototype.a = "A"
objectWithNullPrototype.b = "B"

console.log(objectWithNullPrototype)
console.log(objectWithNullPrototype.toString)

console.log("2. Automatic Semicolon Insertion (ASI)")

function printHelloWorld() {
  return 
    "Hello World";
}

console.log(printHelloWorld())
