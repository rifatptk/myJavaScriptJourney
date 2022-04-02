//The while loop loops through a block of code as long as a specified condition is true.

//Syntax:
// while(condition){
//     block of code to be executed
// }

//Example: while

let i = 0;
let text = ""
while(i <= 10){
    text += "The number is: " + i + "\n";
    i++;
}
console.log(text);


//Example: do while

let i2 = 11;
let text2 = ""
do{
    text2 += "The number is: " + i2 +"\n";
    i2++;
}while(i2 <= 20);

console.log(text2);
//in while loop, do block will be executed at least one time before checking the while condition.