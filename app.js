const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItem1 = document.querySelector('.nav-item1');
const navItem2 = document.querySelector('.nav-item2');

// when someone clicks the hamburger button
navToggle.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});

navItem1.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});

navItem2.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});
