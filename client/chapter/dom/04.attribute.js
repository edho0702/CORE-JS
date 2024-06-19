/*
 html의 속성 (attribute)(정적) 와 DOM 객체의 property(동적)의 차이점이 뭔가요?

html에 작성한 attribute는 JS 엔진에 의해 파싱될 때 DOM 객체를 생성합니다.
이때! html에 작성한 속성의 표준이 DOM 객체의 1:1 맵핑이 되어 프로퍼티를 생성하게 됩니다.
하지만, 모든 속성이 1:1 매핑이 되는건 아닙니다. 비표준 속성은 DOM객체가 생성을 하지 않고,
getAttribute 메서드를 통해 접근이 가능하지만, 이는 위험 할 수 있습니다.
이유는 HTML이라는 언어 자체가 Living Standard 하기 때문입니다. 새로운 표준이 등장 할 경우 기존에 사용된 속성은
반영이 되지 않을 수 있으므로 우리는 안전한 data-* 접근자를 사용합니다. data-접근자를 사용할 
경우 DOM에서 객체를 생성해 컬렉션을 모아주는데, 이는 DOMStringMap이라는 자료안에 모이
게 됩니다. 접근하는 방법은 elem.dataset을 통해 접근이 가능합니다.
*/

/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log(first.hasAttribute('id'));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('data-value'));

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger');

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id');

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);
/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'seonbeom';
console.log(first.dataset.value);
console.log(first.getAttribute('data-name'));

first.removeAttribute('sayHi');

first.setAttribute('class', '');

// const second = document.querySelector('.second');
function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if (!isString(prop))
    throw new TypeError(
      'getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );

  return node.getAttribute(prop);
}

setAttr('.second', 'id', 'bye'); // 'hola'

function typeError(message) {
  return new TypeError(message + '문자 타입 이어야 합니다.');
}

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) {
    typeError('setAttr 함수의 두 번째 인수는');
  }

  if (value === '') {
    node.removeAttribute(prop);
    return;
  }

  // prop에 data가 있어? 그럼 dataset으로 넣기

  if (!value)
    throw new ReferenceError(
      'setAttr 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.setAttribute(prop, value);
}

//
setAttr('.second', 'data-name', 'tiger');

//
//
// function attr(node, prop, value) {
//   if (!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }
// }
// 한줄로 바꾸면....
const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

attr('.first', 'class');
attr('.first', 'class', 'hahaha');
