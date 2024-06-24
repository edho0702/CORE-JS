const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

/* aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    depthList.forEach(h);

    target.style.height = '100px';
  });

  //   a.addEventListener('mouseleave', () => {
  //     depthList.forEach(h);
  //   }); // 커서가 메뉴탭에 가기전에 사라지는 문제점이 발생하니 밖에다 넣는게 좋다
});

header.addEventListener('mouseleave', () => depthList.forEach(h));
 */

/* global gsap */
aList.forEach((a) => {
  const target = a.lastElementChild;

  const tl = gsap
    .timeline({ paused: true })
    .to(target, { height: 100, ease: 'power3.inOut' });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
}); // 커서가 메뉴탭에 가기전에 사라지는 문제점이 발생하니 밖에다 넣는게 좋다
