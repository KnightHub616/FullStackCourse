/*Create a message in console that instructs person of what they are doing. 
Add three variables for the html to pull from each with different arithmatic symbols (first is multiplication then division then subtraction)
assign string values to variables
create alert that gives sum of variables (secret code) to the end user*/
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"; /*this is the console message*/
console.log(message); /*should print the message in the console*/
var num1 = 5 * 2; /*code is 10  */
var num2 = 80 / 2; /*code is 40  */
var num3 = 40 - 1; /*code is 39  */
let str1 = num1; /*this should equal the sum of the corresponing variables */
let str2 = num2; /*this should equal the sum of the corresponing variables */
let str3 = num3; /*this should equal the sum of the corresponing variables */
alert(str1 + "- " + str2 + "- " + str3); /*pop up alert with the secret code */
