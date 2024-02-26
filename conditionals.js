// if
// if else
// if else if   (chain)
// switch case default

let age = 30;

if (age >= 18 && age <= 60) {
    console.log("You can watch the movie in Cinema, please pay")
} else if (age > 60) {
    console.log("You can watch the movie in Cinema, don't pay")
}
else {
    console.log("You cannot watch the movie in Cinema, you are a minor")
}


// conde snippet

 switch (age) {
    case 18:
        console.log("You can watch the movie in Cinema, please pay")
    break;
    case 60:
         console.log("You can watch the movie in Cinema, don't pay")
    break;
 
    default:
         console.log("You cannot watch the movie in Cinema, you are a minor")
        break;
 }
