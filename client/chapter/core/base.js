// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function dev(a, b) {
//   return a / b;
// }

// function useSkill(num1) {
//   if (num1 === 'fireball') {
//     console.log(num1);
//     return 10;
//   }
// }

// const fireball = useSkill('fireball');
// console.log(fireball);

// function perSon(age) {
//   if (age >= 20) {
//     return '성인';
//   } else if (age < 20 && age > 13) {
//     return '청소년';
//   } else {
//     return '어린이';
//   }
// }
// const perSon1 = perSon(20);

// console.log(perSon1);
// let collTime = 0;
// function useSkill(skillName) {
//   if (skillName === '불꽃화살') {
//     return 10;
//   } else if (skillName === '얼음화살') {
//     return 5;
//   } else if (skillName === '냉기파열') {
//     return 2;
//   } else if (skillName === '메테오') {
//     return 60;
//   }
// }
// collTime = useSkill('불꽃화살');
// if (collTime > 0) {
//   console.log('사용불가');
// }

// function score(result) {
//   if (result >= 90) {
//     return 'A';
//   } else if (result < 90 && result >= 80) {
//     return 'B';
//   } else if (result < 80 && result >= 70) {
//     return 'C';
//   } else if (result < 70 && result >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// const test = score(110);
// console.log(test);
// 1번 함수
function calCulator(num1, sign, num2) {
  if (sign === '+') {
    return sum(num1, num2);
  } else if (sign === '-') {
    return sub(num1, num2);
  } else if (sign === '*') {
    return mult(num1, num2);
  } else if (sign === '/') {
    return dev(num1, num2);
  }
}
const result = calCulator(6, '+', 3);

console.log(result);

const sum1 = sum(10, 5);
console.log(sum1);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function dev(a, b) {
  return a / b;
}
