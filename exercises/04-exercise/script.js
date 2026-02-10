const age = 17;
if (age >= 18) {
    console.log("You can vote!")
}
else {
    console.log("Sorry, you're too young to vote.")
}
const score = 85;
if (score >= 90) {
    console.log("Grade: A"); 
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

for (let i=5; i>=1; i--) {
    console.log(i); 
}
console.log('Blast off!');

const classmates=['Alice', 'Clare', 'Ryan', 'Keira'];
for (let i=0; i<classmates.length; i++) {
    console.log(classmates[i]);
}
for (const classmate of classmates) {
    console.log('hello ' + classmate);
}
