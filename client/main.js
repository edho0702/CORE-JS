import data from './data/data.js';
import {
  addClass,
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  showAlert,
} from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기
//    - input.value

// 3. data함수에서 주접 1개 꺼내기
//    - data(name)
//    - getRandom()

// 4. pick 항목 랜더링하기

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.');

    return;
  }
  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로된 이름을 입력해 주세요.');
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

submit.addEventListener('click', handleSubmit);

// 콜백함수사용예시
// function 함수1(callback) {
//     console.log("함수 1 실행");
//     setTimeout(() => {
//         // 10초뒤에 실행됨
//         console.log("함수 1 완료");
//         callback()
//     }, 1000)
// }

// function 함수2(callback) {
//     console.log("함수 2 실행");
//     setTimeout(() => {
//         // 10초뒤에 실행됨
//         console.log("함수 2 완료");
//         callback()
//     }, 1000)

// }

// function 함수3() {
//     console.log("함수 3 실행");
//     console.log("함수 3 완료");
// }

// 함수1(function(){
//   함수2(function(){
//     함수3()
//   })
// })

// function 함수1() {
//   console.log('함수 1 실행');

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('함수 1 완료');
//       resolve();
//     }, 1000);
//   });
//   return promise;
// }

// function 함수2() {
//   console.log('함수 2 실행');

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       // 1초뒤에 실행됨
//       console.log('함수 2 완료');
//       resolve();

//       // reject() reject은 어떠한이유로 실패했을떄 호출하면됨
//     }, 1000);
//   });

//   return promise;
// }

// function 함수3() {
//   console.log('함수 3 실행');
//   console.log('함수 3 완료');
// }

// 함수1().then(function () {
//   함수2().then(function () {
//     함수3();
//   });
// });

// 함수1()
//   .then(function () {
//     return 함수2();
//   })
//   .then(function () {
//     함수3();
//   });
