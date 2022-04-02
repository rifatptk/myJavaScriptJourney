//Javascript break statement can be used to jump out of a loop
//Example:
let text = ""
for(i = 0; i <= 10; i++){
    if (i ===3){break};
    text += "The number is: " +i+ "\n";
}
console.log(text);

//Javascript continue statement can be used to skip a looped item.
//Example:
text = ""
for(i = 0; i <= 10; i++){
    if (i ===3){continue}; //here continue statement skips 3.
    text += "The number is: " +i+ "\n";
}
console.log(text);
//The break and the continue statements are the only javascript statements that can be used to jump out of a code block.