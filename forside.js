"use strict";
document.addEventListener("DOMContentLoaded", start);

let listevisning = document.querySelector("#liste");
const portfolioTemplate = document.querySelector("template");
let billeder;
let filter = "alle";
const fil = "portfolio.json";

function start() {
	console.log("DOM er loaded");

	document.querySelectorAll(".nav_wrapper").forEach((link) => {
		link.addEventListener("mouseover", jump);

		function jump() {
			link.querySelector("img").classList.add("jump");
			link.addEventListener("mouseout", () => {
				link.querySelector("img").classList.remove("jump");
			});
		}
	});

	//----lytter til klik på filterknapper og kalder funktion filtrerRetter-----
	const filterKnapper = document.querySelectorAll("#filter button");

	filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerRetter));
	hentData(fil);
}

//-----------filtrer retter------------
function filtrerRetter() {
	filter = this.dataset.kategori;
	console.log(filter);

	document.querySelector(".valgt").classList.remove("valgt");
	this.classList.add("valgt");

	hentData(fil);
}

//----------hent data fra json----------
async function hentData(fil) {
	const resultat = await fetch(fil);
	const json = await resultat.json();
	visBilleder(json);
}

//-----kloner billeder/data til template----
function visBilleder(billeder) {
	listevisning.textContent = "";

	billeder.forEach((billede) => {
		if (filter == billede.kategori || filter == "alle") {
			let klon = portfolioTemplate.cloneNode(true).content;

			klon.querySelector(".billede").src = `${billede.billede1}`;
			klon.querySelector(".navn").textContent = `${billede.navn}`;

			klon.querySelector(".overlay").addEventListener("click", () => visDetaljer(billede));

			listevisning.appendChild(klon);
		}
	});
}

//--------FUNKTION TIL DETALJESIDEN------

function visDetaljer(hvilken) {
	console.log("detaljesiden");
	location.href = `detalje.html?id=${hvilken._id}`;
}

//-------------nav scroll-------------
window.onscroll = function () {
	navScroll();
};

function navScroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector("nav").style.backgroundColor = "white";
	} else {
		document.querySelector("nav").style.backgroundColor = "";
	}
}
