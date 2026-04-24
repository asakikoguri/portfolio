// js/portfolio.js
console.log("portfolio.js loaded!");

// ここにハンバーガーメニューなどの動きを書いていきます


const btn = document.querySelector('#js-btn');
const nav = document.querySelector('#js-nav');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  nav.classList.toggle('active');
});

// メニュー内のリンクをクリックしたら閉じる（親切設計）
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    btn.classList.remove('active');
    nav.classList.remove('active');
  });
});

