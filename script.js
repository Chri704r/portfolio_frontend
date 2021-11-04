let menuIsOpen = false;

document.querySelector("#menuknap").addEventListener("click", toggleMenu);

//------------------BURGER MENU-------------------
function toggleMenu() {
	console.log("toggleMenu");

	document.querySelector("#menuknap").classList.toggle("change");

	const links = document.querySelectorAll(".link");
	links.forEach((link) => link.addEventListener("click", clickLink));

	function clickLink() {
		if (menuIsOpen == true) {
			document.querySelector(".link").removeEventListener("click", clickLink);
			document.querySelector("#navbar").classList.add("hidden");
			document.querySelector("main").classList.remove("blur");

			document.querySelector("#navbar").classList.remove("openmenu");
			document.querySelector("#navbar").classList.add("closemenu");

			document.querySelector("#menuknap").classList.toggle("change");
			menuIsOpen = false;
		}
	}

	// Undersøg om menuen er åben eller lukket
	if (menuIsOpen == true) {
		console.log("add closemenu");

		// Menuen er åben, så vi lukker den med css
		document.querySelector("#navbar").classList.remove("openmenu");
		document.querySelector("#navbar").classList.add("closemenu");
		document.querySelector("main").classList.remove("blur");

		// menuen er nu lukket, så ændrer menuvariablen til at vise dette
		menuIsOpen = false;
	} else {
		console.log("add openmenu");

		document.querySelector("#navbar").classList.remove("hidden");
		// menuen er lukket, så vi åbner den
		document.querySelector("#navbar").classList.remove("closemenu");
		document.querySelector("#navbar").classList.add("openmenu");
		document.querySelector("main").classList.add("blur");

		// Menuen er nu åben, så vi ændrer menuvariablen til at visse dette
		menuIsOpen = true;
	}

	console.log(menuIsOpen);
}
