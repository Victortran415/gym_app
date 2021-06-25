const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");
const body = document.querySelector("body");

const mobileMenu = () => {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
	body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
	duration: 0.6,
	opacity: 0,
	y: -150,
	stagger: 0.3,
});

gsap.from(".animate-services", {
	scrollTrigger: ".animate-services",
	duration: 0.5,
	opacity: 1,
	x: -150,
	stagger: 0.15,
});
gsap.from(".animate_img", {
	scrollTrigger: ".animate-services",
	duration: 1.2,
	opacity: 0,
	x: -200,
});
gsap.from(".animate_email", {
	scrollTrigger: ".animate_email",
	duration: 0.8,
	opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 1
});
