function sliderSetup() {
	if (window.CSS.supports('display: grid')) return;

	var slideButtons = document.getElementsByClassName("slide");
	for (var i = 0; i < slideButtons.length; i++) {
		slideButtons[i].addEventListener("click", slide)
	}
}

const currentSlides = new WeakMap();

/**
 * Called on slide button click
 * @param {Event} e
 */
function slide(e) {
	/** @type {HTMLElement} */
	var sliderWrapper = e.target;
	var slider = sliderWrapper.parentElement.firstElementChild;

	var slideWidth = 0;
	for (var i = 0; i < slider.children.length; i++) {
		slideWidth += slider.children[i].offsetWidth;
	}
	var slides = Math.ceil(slideWidth / window.innerWidth);
	var currentSlide = currentSlides.get(slider) || slider.getAttribute("data-current") || 0;

	var slideIndex;
	if ((this.className.indexOf("back") > -1) && currentSlide > 0) {
		slideIndex = currentSlide - 1;
	} else if ((this.className.indexOf("next") > -1) && currentSlide < slides - 1) {
		slideIndex = currentSlide + 1;
	}

	if (slideIndex != null) {
		slider.setAttribute("style", "transform:translateX(-" + slideIndex + "00vw)")
		currentSlides.set(slider, slideIndex);
		slider.setAttribute("data-current", slideIndex)
	}
}

sliderSetup();
