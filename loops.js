// for loop (for in) (for of)
// while loop
// do while loop
// iteration

// break
// continue

// for (let index = 0; index <= 20; index++) {
//     console.log(index + " hello")
// }
// let index = 0;
// while ( true ) {
//     console.log(index + " hello")
//     index++
// }

// let index = 0;
//  do {
//     console.log(index + " hello")
//     index++
// } while (index <= 20)


// var person =  { firstName: "John", lastName: "Doe", age: 25 };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//     console.log(number * 2); // This will log numbers 1 to 5
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        continue;
    }
    console.log(index, "hello");
}
///
