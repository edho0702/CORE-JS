function 함수1() {
  console.log('함수 1 실행');
  setTimeout(() => {
    // 10초뒤에 실행됨
    console.log('함수 1 완료');
  }, 1000);
}

function 함수2() {
  console.log('함수 2 실행');
  setTimeout(() => {
    // 10초뒤에 실행됨
    console.log('함수 2 완료');
  }, 1000);
}

function 함수3() {
  console.log('함수 3 실행');
  console.log('함수 3 완료');
}

함수1();
함수2();
함수3();

// function 함수1(callback) {
//   console.log('함수 1 실행');
//   setTimeout(() => {
//     // 10초뒤에 실행됨
//     console.log('함수 1 완료');
//     callback();
//   }, 1000);
// }

// function 함수2(callback) {
//   console.log('함수 2 실행');
//   setTimeout(() => {
//     // 10초뒤에 실행됨
//     console.log('함수 2 완료');
//     callback();
//   }, 1000);
// }

// function 함수3() {
//   console.log('함수 3 실행');
//   console.log('함수 3 완료');
// }

// 함수1(function () {
//   함수2(function () {
//     함수3();
//   });
// });

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

// 함수1()
//   .then(function () {
//     return 함수2();
//   })
//   .then(function () {
//     함수3();
//   });
