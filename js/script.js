"use strict";

function toggleMenu() {
	menu.classList.toggle('open');
	menuToggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
}

function closeMenu() {
	menu.classList.remove('open');
	menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', ev => {
	toggleMenu();
})

for(const link of document.querySelectorAll("nav a")) {
  link.addEventListener('click', showSection);
}

function showSection(ev) {
  clearCurrent();
  console.log(ev.target.hash);
  ev.target.classList.add('current');
  document.querySelector(ev.target.hash).classList.add('current');
	closeMenu();
	ev.preventDefault();
}

// to clear the 'current' class from all sections
function clearCurrent() {
  for(const current of document.querySelectorAll('.current')) {
    current.classList.remove('current');
  }
}
