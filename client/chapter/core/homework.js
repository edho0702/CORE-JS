// // 함수 시그니처

function getValueAtObject(obj, key) {
  if (!obj[key]) {
    throw new Error('Error !');
  }
  return obj[key];
}

// //예시코드

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age')); // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !

getValueAtObject(person, 'key');

// 함수 시그니처

function getNumberAtArray(arr, index) {
  if (!arr[index]) {
    throw new Error('Error!');
  }

  return arr[index];
}

// 예시코드
const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!

// //////////////////////////////////////정답

function getValueAtObject(obj, key) {
  if (typeof key !== 'string') {
    throw new TypeError(
      'getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (typeof obj === 'object') {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      throw new Error(
        `getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`
      );
    }
  } else {
    throw new TypeError(
      'getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.'
    );
  }
}

// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

function getNumberAtArray(arr, index) {
  if (Array.isArray(arr)) {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error('배열에 없는 index입니다.');
    }
  } else {
    throw new TypeError(
      'getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.'
    );
  }
}

function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}
