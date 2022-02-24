// Make MOBILE nav work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header-background');

btnNavEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
});

////////////////////smooth scrolling animation/////////////
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);
allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const href = link.getAttribute('href');
		console.log(href);

		/////scroll back to top/////////////////
		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		if (href !== '#' && href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			// console.log(sectionEl);
			sectionEl.scrollIntoView({ behavior: 'smooth' });
		}
		///////////////////close mobile nav////////////
		if (link.classList.contains('main-nav-link'))
			headerEl.classList.toggle('nav-open');
	});
});

////////////////// timer section////////////
const countDown = () => {
	const countDate = new Date('June 05, 2022 16:00:00').getTime();
	// console.log(countDate);
	const now = new Date().getTime();

	const gap = countDate - now;

	const seconds = 1000;

	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	const textDays = Math.floor(gap / days);
	const textHours = Math.floor((gap % days) / hours);
	const textMinutes = Math.floor((gap % hours) / minutes);
	const textSeconds = Math.floor((gap % minutes) / seconds);

	document.querySelector('.days').innerText = textDays;
	document.querySelector('.hours').innerText = textHours;
	document.querySelector('.minutes').innerText = textMinutes;
	document.querySelector('.seconds').innerText = textSeconds;
	// console.log(gap);
};
// console.log(textSeconds);
setInterval(countDown, 1000);

// ////////////// Form wave text section ////////////

const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 60}ms">${letter}</span>`
		)
		.join('');
});
// ////////////// gallery section /////////////

const slider = tns({
	container: '.my-slider',
	slideBy: '1',
	speed: 400,
	nav: false,
	autoplay: true,
	controls: false,
	autoplayButtonOutput: false,
	responsive: {
		1600: {
			items: 5,
			gutter: 20,
		},
		1024: {
			items: 4,
			gutter: 20,
		},
		768: {
			items: 3,
			gutter: 20,
		},

		468: {
			items: 2,
		},
	},
});
// ////////////////////////////////// end of gallery ////////

// ///////////// Contact Form ////////////

const sendEmail = () => {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'syedaalamtesting@gmail.com',
		Password: 'xpskcvdsaimedpij',
		To: 'syedahalam@yahoo.com',
		From: document.getElementById('email').value,
		Subject: 'RSVP',
		Body:
			'Name: ' +
			document.getElementById('name').value +
			'<br> Email: ' +
			document.getElementById('email').value +
			'<br> Guests Attending: ' +
			document.getElementById('guests').value +
			'<br> Message: ' +
			document.getElementById('message').value,
	}).then((message) => alert('Message sent successfully!'));
};
/////////////////////////////// end of form ////////////////////////
