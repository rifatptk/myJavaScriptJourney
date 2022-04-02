// JS for of statement loops through the values of an iterable object (arrays, strings, maps, nodelists and more.)
// JS for of loop syntax

// for(variable of iterable){
//     codes to be executed
// }

// example: array
const numbers = [13, 22 ,53 ,47 , 95]
for(x of numbers){
    console.log(x); //here x refers to the values of the array not the index like for in.
}

//example: string
const Name = "Rifat Shikder";
for(x of Name){
    console.log(x);
}
// we shouldn't use for of to iterate through an object. for in is the best option to iterate through an object.
