//toggle links
const links = document.querySelector(`.links`);
const toggleBtn = document.querySelector(`.toggle-btn`);
const linksContainer = document.querySelector(`.links-container`);

toggleBtn.addEventListener(`click`, function () {
	//dynamic toggle links
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if (linksHeight == 0) {
		links.style.height = `${containerHeight}px`;
	} else {
		links.style.height = 0;
	}
});
//scroll nav
const nav = document.querySelector(`#nav`);
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > navHeight) {
		nav.classList.remove(`nav-transparent-background`);
		nav.classList.add(`nav-solid-background`);
	} else {
		nav.classList.remove(`nav-solid-background`);
		nav.classList.add(`nav-transparent-background`);
	}
});

//categories section animation
const categoriesSectionTitle = document.querySelector(
	`.categories-section-title`
);
const UnderLine = document.querySelector(`.categories-underline`);
const slug = document.querySelector(`.pcb-slug-container`);
const pellet = document.querySelector(`.airgun-pellet-container`);
const fcp = document.querySelector(`.fcp-container`);
const categoriesBtn = document.querySelector(`.categories-btn-container`);

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > 300) {
		categoriesSectionTitle.style.animation = `opacity1 3s 1 ease-out forwards`;
		UnderLine.style.animation = `opacity1 3s 1 ease-out forwards`;
		slug.style.animation = `slideToRight 2s 1 ease-out forwards`;
		pellet.style.animation = `slideToTop 2s 1 ease-out forwards`;
		fcp.style.animation = `slideToLeft 2s 1 ease-out forwards`;
		categoriesBtn.style.animation = `opacity1 2s 2s ease-out forwards`;
	}
});
//read more
const aboutUsReadMore = document.querySelector(`.about-us-read-more`);
const aboutUsText = document.querySelector(`.about-us-text`);

aboutUsReadMore.addEventListener(`click`, function () {
	if (aboutUsReadMore.innerHTML == `Read More`) {
		aboutUsReadMore.innerHTML = `Close`;
		aboutUsText.innerHTML = `As a company established in 2022 under the name of Poseidonammo, we operate in the PCP bullet industry. We provide production in PCB Slug, Airgun Pellet and Full Copper Platted(FCP) Bullet categories.
Poseidon ammo focuses on the production of high quality and high performance bullets. PCB Slug is a high precision bullets that provides high shoting capability. Airgun bullet is an ideal option for activities such as hunting and target shooting. In the FCP category, we produce bullets with higher velocities and longer ranges.
We are constantly conducting research and development studies to offer the most suitable products for our customers’ needs. The quality of the materials used in our products and the meticulousness of workmanship ensure high performance and longevity of our products.
As a company, we focus on providing the best service to our customers and ensuring their satisfaction. We work to assist our customers with pre-sales and post-sales support.As Poseidonammo, we aim to stand out with our quality and innovative products in air gun bullet industry. We continue to work to provide you with the best service.`;
	} else {
		aboutUsReadMore.innerHTML = `Read More`;
		aboutUsText.innerHTML = `As a company established in 2022 under the name of Poseidonammo, we operate in the PCP bullet industry. We provide production in PCB Slug, Airgun Pellet and Full Copper Platted(FCP) Bullet categories. Poseidon ammo focuses on the production of high quality and high performance bullets. PCB Slug is a high precision bullets that provides high shoting capability. Airgun bullet is an ideal option for activities such as hunting and target shooting. In the FCP category, we produce bullets with higher velocities and longer ranges. . .`;
	}
});
//aboutUs section animation
const aboutUsSectionTitle = document.querySelector(`.about-section-title`);
const img = document.querySelector(`.img-container`);
const aboutUsInformation = document.querySelector(`.about-us-information`);
const aboutUsBtn = document.querySelector(`.btn-container`);

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > 900) {
		aboutUsSectionTitle.style.animation = `opacity1 3s 1 ease-out forwards`;
		img.style.animation = `slideToRight 2s 1 ease-out forwards`;
		aboutUsInformation.style.animation = `slideToLeft 2s 1 ease-out forwards`;
		aboutUsBtn.style.animation = `slideToTop 2s 1 ease-out forwards`;
	}
});
//contactUs section animation
const contactUsForm = document.querySelector(`.contact-us-form`);
const contactUsInformation = document.querySelector(`.information-sections`);

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > 1400) {
		contactUsForm.style.animation = `slideToLeft 2s 1 ease-out forwards`;
		contactUsInformation.style.animation = `slideToRight 2s 1 ease-out forwards`;
	}
});
//show back to top
const backToTop = document.querySelector(`.back-to-top-container`);

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > 600) {
		backToTop.classList.add(`show-back-to-top`);
	} else {
		backToTop.classList.remove(`show-back-to-top`);
	}
});
//faq
const questions = document.querySelectorAll(`.question-and-answer`);
let currentAnswer = false;
let currentIcon = false;

questions.forEach(function (question) {
	const questionBtn = question.querySelector(`.question`);
	questionBtn.addEventListener(`click`, function (e) {
		const answerText = question.querySelector(`.answer`);
		const questionIcon = question.querySelector(`.question-btn`);
		if ((currentAnswer == false) & (currentIcon == false)) {
			answerText.classList.add(`show-answer`);
			questionIcon.classList.add(`rotate`);
			currentAnswer = answerText;
			currentIcon = questionIcon;
		} else if (currentAnswer == answerText) {
			answerText.classList.toggle(`show-answer`);
			questionIcon.classList.toggle(`rotate`);
		} else {
			currentAnswer.classList.remove(`show-answer`);
			currentIcon.classList.remove(`rotate`);
			answerText.classList.toggle(`show-answer`);
			questionIcon.classList.toggle(`rotate`);
			currentAnswer = answerText;
			currentIcon = questionIcon;
		}
		// console.log(currentAnswer);
	});
});
//faq animation
const faq = document.querySelector(`.faq`);

window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > 2000) {
		faq.style.animation = `opacity1 3s 1 ease-out forwards`;
	}
});
//date
const date = document.querySelector(`.date`);
date.innerHTML = new Date().getFullYear();
//smooth scroll fixed
const scrollLinks = document.querySelectorAll(`.scroll-link`);

scrollLinks.forEach(function (scrollLink) {
	scrollLink.addEventListener(`click`, function (e) {
		links.style.height = 0;
		e.preventDefault();
		const id = scrollLink.getAttribute(`href`).slice(1);
		const element = document.querySelector(`#${id}`);
		let position = element.offsetTop - navHeight;
		window.scrollTo({
			left: 0,
			top: position,
		});
	});
});
