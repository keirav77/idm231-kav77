function get_score(total_correct) {
  const possible = 10;
  const score    = (total_correct / possible) * 100;
  return score;
}

const correct = 7;
const score   = get_score(correct);
let passed;

if (score >= 80)
  passed = true;
else
  passed = false;

console.log(passed);
const one = 3;
const two = '3';

console.log(one == two);


const cars = ['Chevy', 'Ford', 'Dodge'];

let i = 1;
while (cars[i]) {
  console.log(cars[i]);
  i++;
}

