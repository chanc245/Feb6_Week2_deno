/**
 * 3. Make a program that asks for the user’s name and then prints “Hello $name”
 */
function askName() {
  let nameInput = prompt("Please enter your name: ");
  console.log(`Hello, ${nameInput}`);
}

askName()