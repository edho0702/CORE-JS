/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

/* 캡처링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  //   console.log('target : ', e.target);
  //   console.log('currentTarget : ', e.currentTarget);
  //   console.log('this : ', this);

  console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  e.stopPropagation(); // 남용하면 데이터 수집을 방해함

  console.log('%c p', 'color:dodgerblue');
});
