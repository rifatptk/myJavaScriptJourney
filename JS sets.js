//A javascript set is a collection of unique values. Each value can only occure once in a set.

// set methods:
//  new set() --creates a new set
//  add() --adds a new element to a set
//  delete() --removes an element from a set
//  values() method returns a new iterator object containing all the values of a set

//Example: 
const mySet = new Set();

mySet.add("a"); //add() method pushes an element into set.
mySet.add("b");
mySet.add("c");
mySet.add("d");
mySet.add("e");
mySet.add("a"); //same element cant be pushed more than once.
console.log(mySet);


mySet.delete("a"); //delete method removes specified set element.
console.log(mySet);


//javascript set also have a forEach(a_function) method.
let text = "Value is: "
mySet.forEach(function(value){
    text += value;
})
console.log(text);




// values() method returns a new iterator object containing all the values of a set.

let newIterator = mySet.values(); // now newIterator is a iterable object, which can be iterated by for of loop.
console.log(newIterator);
text = "Value is: ";
for(x of newIterator){
    console.log(text + x);
}