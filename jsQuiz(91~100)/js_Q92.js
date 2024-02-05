const input = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`

let seperated_input = input.split('\n');
let numbers = [];

for (let i of seperated_input){
  let j = i.split(',');
  let k = j.slice(1, j.length-2);
  numbers.push(k.join(''))
}

console.log(numbers);

let first_part = '';
let sec_part = '';
let result = [];
for (let salary of numbers){
  console.log(salary) //'333356766'
  for (let seperated_salary of salary){
    console.log(seperated_salary) //'
    if (seperated_salary != '\''){ //'가 아닐 때
      if (seperated_salary == '3'){
        first_part += '1';
        sec_part += '2';
      } else if (seperated_salary == '4'){
        first_part += '2';
        sec_part += '2';
      } else if (seperated_salary == '6'){
        first_part += '1';
        sec_part += '5';
      } else {
        first_part += seperated_salary;
        sec_part += '0';
      }
    }
  }
  console.log(first_part);
  console.log(sec_part);
  result.push([parseInt(first_part, 10), parseInt(sec_part, 10)]);
  first_part = '';
  sec_part = '';
}
console.log(result);