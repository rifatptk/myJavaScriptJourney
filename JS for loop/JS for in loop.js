// JS for in loop is used to iterate all of the property of an Object/ all of the elements of an Array.
// JS for in loop syntax

// for(variable_name in object_name/ array_name){
//     codes to be executed
// }

// example:
let me = {
    name: "Rifat",
    age: 26,
}

for(x in me){
    console.log(x); //attension: x refers to object keys not values.
    console.log(me[x]); // object_name[x] will print values inside the keys.
}