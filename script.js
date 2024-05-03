function splitTheText() {
	var text = document.querySelector(".main h1");
	var h1Text = text.textContent;

	var splitText = h1Text.split("");
	var halfText = splitText.length / 2;

	var clutter = "";

	splitText.forEach(function (elem, idx) {
		if (idx < halfText) {
			clutter += `<span class="firstHalf">${elem}</span>`;
		} else {
			clutter += `<span class="secondHalf">${elem}</span>`;
		}
	});
	text.innerHTML = clutter;
}

splitTheText();

gsap.from("h1 .firstHalf", {
	y:80,
	opacity: 0,
	duration: 0.6,
    delay: 0.5,
	stagger: 0.15,
});
gsap.from("h1 .secondHalf", {
	y: 80,
	opacity: 0,
	duration: 0.6,
	delay: 0.5,
	stagger: -0.15,
});
