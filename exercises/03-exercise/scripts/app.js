function greetPerson (name) {
console.log (`Hello, ${name}! Welcome!`)
}
greetPerson ('Keira')
greetPerson ('Gibby')
greetPerson ('Clare')


function calculateArea (width, height) {
   const area = width * height;
    return area;
}
const area = calculateArea (5, 10);
console.log (`Area: ${area} square units`);

const area2 = calculateArea (8, 12);
console.log (`Area: ${area2} square units`);

const area3 = calculateArea (3, 7);
console.log (`Area: ${area3} square units`);



const greetPersonArrow = (name) => {
    console.log (`Hello, ${name}! Welcome!`);
};
greetPersonArrow ('Keira');
greetPersonArrow ('Gibby');
greetPersonArrow ('Clare');
const calculateAreaArrow = (width, height) => {
    return area = width * height;
};
