function sliderSetup() {
	var slideButtons = document.getElementsByClassName("slide");
	for (var i = 0; i < slideButtons.length; i++) {
		slideButtons[i].addEventListener("click", slide)
	}
}

function slide() {
	var slider = this.parentNode.firstChild,
		slideWidth = 0;
	for (var i = 0; i < slider.children.length; i++) {
		slideWidth += slider.children[i].offsetWidth;
	}
	var slides = Math.ceil(slideWidth / window.innerWidth),
		currentSlide = slider.getAttribute("data-current") || slider.currentSlide;
	if (!currentSlide) currentSlide = 0;
	
	console.log(this.className);
	
	if ((this.className.indexOf("back") > -1) && currentSlide > 0) {
		slider.setAttribute("style", "transform:translateX(-"+ (currentSlide - 1) +"00vw)")
		slider.currentSlide = currentSlide - 1;
		slider.setAttribute("data-current", currentSlide - 1)
	} else if ((this.className.indexOf("next") > -1) && currentSlide < slides - 1) {
		slider.setAttribute("style", "transform:translateX(-"+ (currentSlide + 1) +"00vw)")
		slider.currentSlide = currentSlide + 1;
		slider.setAttribute("data-current", currentSlide + 1)
	}
}

if (document.body.readyState == "interactive" || document.body.readyState == "complete") {
	sliderSetup();
} else {
	document.body.onload = sliderSetup;
}