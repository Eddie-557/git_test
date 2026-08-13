// console.log("Hello, World")
// let firstname = "James"
// let lastname = "John"
// console.log(firstname)
// console.log(lastname)

// let age = 11;
// console.log(age); 
// age = 54;
// console.log(age); 

// console.log((3 + 2) - 76 * (1 + 1))
// console.log(23 + 97)
// console.log(23 + 97 + 32 + 21 + 11 + 41)
// console.log((4 + 6 + 9) / 77)

// // const pi = 3.14;
// // pi = 32;
// // console.log(pi);
// let a = 10;
// console.log(a);
// a = 12;
// console.log(a);

// let b = 7 * a;
// console.log(b);

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log(percentage)

// function createParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll('button');

// for (const button of buttons) {
//     button.addEventListener('click', createParagraph);
// }

// const num1 = 10;
// const num2 = 50;
// console.log((num2 % 9) * num1);
// console.log(num2 + num1 / 8 + 2);
// console.log(4 + 2 ** 3);
// console.log((4 + 2) ** 3);

// let r = 2;
// /*r++;
// console.log(r);*/
// ++r;
// console.log(r);

// let counter = 1;
// let tM = counter++; 

// alert(tM);

// let name = prompt(`What is the "official" name of JavaScript`, 22)

// if (name == "ECMAScript") {
//     alert('Right');
// } else {
//     alert(`You don't know? "ECMAScript"!`);
// }

// alert("Let's compare a number with 0");
// let numb1 = prompt("Enter the first number", );
// // //let numb2 = prompt("Enter the second number", );
// if (numb1 > 0) {
//     alert(1);
// } else if (numb1 < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }
// let a = prompt("Type a number");
// let b = prompt("Type a number")
// let result = (a + b < 4)? 'Below':
//     (a + b > 4)? 'Over':
//     'Bleeeehhhh';
// alert(result)

// let login = prompt(`Are you an "Employee" or "Director": `)
// let message = (login == 'Employee')? 'Hello':
//     (login == 'Director')? 'Greetings':
//     (login == '')? 'No login':
//     '';
// alert (message)

// let age = prompt("Enter your age");
// if (age < 14 || age > 90) {
//     age = prompt("Enter a valid age between 14 - 90");
// } else if (age >= 14 || age <= 90) {
//     alert("You are in the right age cap")
// } else {
//     alert("Invalid input");
// }

// alert("Who's there?");
// let name = prompt(`Enter your UserName: `);
// let pass = prompt(`Enter your Password: `);
// if (name == "Admin" && pass == "TheMaster"){
//     alert("Welcome!");
// } else if (name == '' || pass == ''){
//     alert("Cancelled");
// } else if(name == null || pass == null) {
//     alert("Cancelled");
// } else {
//     alert("Wrong Password");
// }

// let browser = prompt("Enter the name of your browser: ");
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' 
//     || browser === 'Firefox' 
//     || browser === 'Safari' 
//     || browser === 'Opera') {
//     alert("Okay we support these browsers too");
// } else {
//     alert("We hope that this page looks ok!");
// }

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);        
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;

    default:
        break;
}